const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const flash = require('connect-flash');
const path = require('path');
const ObjectId = require('mongodb').ObjectID
const favicon = require('serve-favicon')
const cors = require('cors')

const mongo = require("./routes/db")
const main = require('./routes/main')
// const helpers = require("./routes/helpers/hbshelpers")

const env = process.env.NODE_ENV || "dev";
const reload = process.env.RELOAD || "true";

//same
// Init App
const app = express();
let livereload = ""
let lr = ""

if (reload === "true") {
  livereload = require('livereload');
  lr = livereload.createServer();
  lr.watch([__dirname + "/"]);
}


handlebars = require('express-handlebars').create({
  layoutsDir: path.join(__dirname, "views/layouts"),
  partialsDir: path.join(__dirname, "views/partials"),
  defaultLayout: 'default',
  extname: 'hbs',
  // helpers: helpers
});


app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));


// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(function(req, res, next) {
  // res.header('Access-Control-Allow-Credentials', true);
  // res.header('Access-Control-Allow-Credentials', `${env ? "http://localhost:1002" : "https://joshmoxey.com/"}`);
  // res.header('Access-Control-Allow-Origin', `${env ? "http://localhost:1002" : "https://joshmoxey.com"}`);
  res.header('Access-Control-Allow-Origin', "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS');
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
  next();
});

//cors to avoid the axios bullshit
app.use(cors())

// Express Session
app.use(session({
  store: new RedisStore(),
  secret: 'secret society of hidden strings',
  saveUninitialized: true,
  resave: true,
  cookie: env !== "production" ? {} : { domain: '.joshmoxey.com'},
  secure: true
}))

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

//refresh

app.use(main);

// Set Port
app.set('port', (process.env.PORT || 1001));

app.listen(app.get('port'), function () {
  console.log('Server started on port ' + app.get('port'));
});
