const router = require('express').Router()
const mongo = require("./db")
const ObjectId = require('mongodb').ObjectID
const session = require('express-session')
const bodyParser = require('body-parser')
const flash = require("connect-flash")

router
  .get("/api/page/:section/:page", function (req, res, next) {
    if (!req.params.section || !req.params.page) {
      return res.send(false)
    }
    mongo.db.collection("pages")
      .findOne({
        "sectionIds": req.params.section,
        "pageId": req.params.page,
        "active": true
      }, (err, result) => {
        //checks if it's inside of the array
        if (err) {
          //server error
          return res.send({status: 500})
        }
        if (!result) {
          return res.send({status: 404})
        }
        res.send({...result, ...{status: 200}})
      })
  })
  .get("/api/pages-by-section/:section", function (req, res, next) {
    if (!req.params.section) {
      return res.send(false)
    }


    let sort = {}
    if (req.params.filter) {
      switch (req.params.filter) {
        case "recent":
          sort = {"data.details.date_published": 1}
          //TODO insert proper date here, but this requires details to be tackled
          break
        default:
          sort = {}
      }
    }

    const featured = req.query.featured === "true" ? {featured: true} : {}
    const limit = parseInt(req.params.limit) || 0
    const skip = parseInt(req.params.skip) || 0
    const query = {
      sectionIds: req.params.section,
      active: true,
      ...featured
    }

    mongo.db.collection("pages")
      .find(query)
      .sort(sort)
      .limit(limit)
      .skip(skip)
      .toArray((err, result) => {
        if (err) {
          return res.send({status: 500}) //server error
        }
        if (!result) {
          return res.send({status: 404})
        }
        // res.send({...result, ...{status: 200}})
        res.send(result)
      })
  })
  .get("/api/pages-by-ids", function (req, res, next) {
    if (!req.body.ids) {
      return res.send(false)
    }
    const {ids} = req.body
    const objectIds = ids.map((id) => new ObjectId(id))

    mongo.db.collection("pages")
      .find({
        _id: {$in: objectIds},
        active: true
      }).toArray((err, result) => {
      if (err) {
        return res.send({status: 500}) //server error
      }
      if (!result) {
        return res.send({status: 404})
      }
      // res.send({...result, ...{status: 200}})
      res.send(result)
    })
  })
  .get("/api/pages-by-more", function (req, res, next) {
    if (!req.query) {
      return res.send(false)
    }
    const {sectionId} = req.query
    //in the future, get multiple section pages like:
    // sectionIds: { $in: sectionIds }

    //add check to remove duplicates

    mongo.db.collection("pages")
      .find({
        sectionIds: sectionId,
        active: true
      })
      .sort({"details.date_published": 1})
      .limit(1)
      .toArray((err, recent) => {
        mongo.db.collection("pages")
          .find({
            sectionIds: sectionId,
            active: true
          })
          .sort({"details.views": 1})
          .limit(1)
          .toArray((err, most_viewed) => {
            mongo.db.collection("pages")
              .find({
                sectionIds: sectionId,
                active: true,
              })
              .sort({"details.featured": 1})
              .limit(1)
              .toArray((err, featured) => {
                res.send({
                  featured,
                  recent,
                  most_viewed
                })
              })
          })
      })
  })
  .get("/api/wild-card/:id", function (req, res, next) {
    if (!req.params.id) {
      return res.send(false)
    }
    mongo.db.collection("sections")
      .findOne({
        "sectionId": req.params.id,
        "active": true
      }, (err, section) => {
        mongo.db.collection("redirects")
          .findOne({"from": req.params.id},
            (err2, redirect) => {
              if (err || err2) {
                return res.send({status: 500}) //server error
              }
              if (!section && !redirect) {
                return res.send({status: 404})
              }
              const type = section ? "section" : "redirect"
              return res.send({
                status: 200,
                type,
                redirect: redirect,
                ...section
              })
            })
      })
  })
  .post("/api/increase-view-count/:id", function (req, res, next) {
    const id = req.params.id.split("_")
    const sectionId = id[0]
    const pageId = id[1]

    if (req.query.type === "page") {
      mongo.db.collection("pages")
        .updateOne({
          "sectionIds": sectionId,
          "pageId": pageId,
        }, {
          $inc: {"details.views": 1}
        })
      res.send(200)
    }
    if (req.query.type === "section") {
      mongo.db.collection("sections")
        .updateOne({
          "sectionId.id": sectionId
        }, {
          $inc: {"details.views": 1}
        })
      res.send(200)
    }
    // mongo.db.collection("events")
    //   .insertOne({
    //     "sectionIds": {$elemMatch: {"id": req.params.section}},
    //     "pageId": req.params.page,
    //   })
  })
  .use(function (req, res, next) {
    res.status(404).send("error four o four")
  })

module.exports = router;