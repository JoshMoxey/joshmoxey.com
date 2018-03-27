const MongoClient = require("mongodb").MongoClient;

var env = process.env.NODE_ENV || "dev";
var db;

var type = env === "dev" ? "localhost" : "127.0.0.1"
//
MongoClient.connect("mongodb://" + type + ":27017/joshmoxeycom",
  function (err, connection) {
    if (err) {
      return console.log(err)
    }
    console.log("Mongo connected w/ " + type + ":27017/joshmoxeycom")
    module.exports.db = connection;
  })