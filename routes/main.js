const router = require('express').Router()
const mongo = require("./db")
const ObjectId = require('mongodb').ObjectID
const passport = require("passport")
const session = require('express-session')
const bodyParser = require('body-parser')
var flash = require("connect-flash")

var title = " - joshmoxey.com"
var title = " - JoshMoxey.com"

router
  .get("/", function (req, res) {
    res.render("body/index", {
      title: "Josh Moxey",
      route: "index"
    })
  })
  // .get("/more", function (req, res) {
  //   res.render("body/index", {
  //     title: "Josh Moxey",
  //     route: "index"
  //   })
  // })
  .get("/jsdisabled", function (req, res, next) {
    res.render("body/error/jsdisabled", {
      title: 'Error: Javascript disabled | Internalize',
      route: "error"
    })
  })
  .use(function (req, res, next) {
    res.status(404)
      //.render("body/error/404", {
      //layout: 'noheader.hbs',
      //title: 'Error 404 | Internalize',
      //route: "error"
      //})
      .send("Error, 404")
  })

module.exports = router;