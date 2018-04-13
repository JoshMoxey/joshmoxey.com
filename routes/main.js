const router = require('express').Router()
const mongo = require("./db")
const ObjectId = require('mongodb').ObjectID
const session = require('express-session')
const bodyParser = require('body-parser')
const flash = require("connect-flash")

router
  .get("/profile", function (req, res) {
    res.render("body/profile", {
      title: "Profile",
      route: "profile"
    })
  })
  .get("/data/page/:section/:page", function (req, res, next) {
    if (!req.params.section || !req.params.page) {
      return res.send(false)
    }

    mongo.db.collection("pages")
      .findOne({
        "sectionIds": {$elemMatch: {"id": req.params.section}},
        "pageIds": req.params.page,
        "active": true
      }, (err, result) => {
        //checks if it's inside of the array
        if (err) {
          return res.send({status: 500}) //server error
        }
        if (!result) {
          return res.send({status: 404})
        }
        res.send({...result, ...{status: 200}})
      })
  })
  .get("/data/pages-by-section/:section", function (req, res, next) {
      // ?:filter/:current/:limit/reverse
    console.log(req.query)

    // if (!req.params.section) {
    //   return res.send(false)
    // }

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

    const limit = parseInt(req.params.limit) || 0
    const skip = parseInt(req.params.current) || 0
    //if filter, switch statement for type of filter: default, string or empty

    mongo.db.collection("pages")
      .find({
        sectionIds: {$elemMatch: {"id": req.params.section}},
        active: true
      })
      .sort(sort)
      .limit(limit)
      .skip(skip)
      .toArray((err, result) => {
      if (err)
        return res.send(500) //server error
      if (!result)
        return res.send(false)
      res.send(result)
    })
  })
  .post("/data/pages-by-ids", function (req, res, next) {
    if (!req.body.ids) {
      return res.send(false)
    }
    const {ids} = req.body
    const objectIds = ids.map((id) => new ObjectId(id))

    mongo.db.collection("pages")
      .find({
        _id:{$in: objectIds},
        active: true
      }).toArray((err, result) => {
      //
      if (err)
        return res.send(500) //server error
      if (!result)
        return res.send(false)
      res.send(result)
    })
  })
  .get("/data/section/:section", function (req, res, next) {
    if (!req.params.section) {
      return res.send(false)
    }
    mongo.db.collection("sections")
      .findOne({
        "sectionIds": req.params.section,
        "active": true
      }, (err, result) => {
        if (err)
          return res.send(500) //server error
        if (!result)
          return res.send(false)
        res.send(result)
      })
  })
  .get("/:url", function (req, res, next) { //redirect system
    //potential:
    //get request to show loading...
    //if url found, redirect there
    //else, render a 404 dynamically
    mongo.db.collection("redirects")
      .findOne({"input": req.params.url}, function (err, result) {
        if (!result) return next()
        res.redirect(result.output)
      })
  })
  .get("/jsdisabled", function (req, res, next) {
    res.render("body/error/jsdisabled", {
      //todo make this an actual page
      title: 'Error: Javascript disabled | Internalize',
      route: "error"
    })
  })
  // .options("/data/pages-by-ids", (req, res) => {
  //   res.status(200)
  // })
  .use(function (req, res, next) {
    res.status(404).send("error four o four")
  })

module.exports = router;