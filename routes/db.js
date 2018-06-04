const MongoClient = require("mongodb").MongoClient;

let env = process.env.NODE_ENV || "dev";
let db;
let type = env === "development" ? "localhost" : "127.0.0.1"

MongoClient.connect("mongodb://" + type + ":27017/joshmoxeycom",
  function (err, connection) {
    if (err) {
      return console.log(err)
    }
    console.log("Mongo connected w/ " + type + ":27017/joshmoxeycom")
    module.exports.db = connection;
  })