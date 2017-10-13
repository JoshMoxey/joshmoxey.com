const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const flash = require('connect-flash');
const path = require('path');
const ObjectId = require('mongodb').ObjectID
const favicon = require('serve-favicon')

const mongo = require("./routes/db")
const main = require('./routes/main')
const helpers = require("./routes/helpers/hbshelpers")

var env = process.env.NODE_ENV || "dev";
var reload = process.env.RELOAD || "true";

// Init App
var app = express();

if (reload === "true") {
  const livereload = require('livereload');
  const lr = livereload.createServer();
  lr.watch([__dirname + "/"]);
}

handlebars = require('express-handlebars').create({
  layoutsDir: path.join(__dirname, "views/layouts"),
  partialsDir: path.join(__dirname, "views/partials"),
  defaultLayout: 'signedin',
  extname: 'hbs',
  helpers: helpers
});

app.use(favicon(path.join(__dirname, 'public', 'favicon', 'favicon.ico')))

app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
  next();
});

// Express Session
app.use(session({
  store: new RedisStore(),
  secret: 'secret society of hidden strings',
  saveUninitialized: true,
  resave: true,
  cookie: env !== "production" ? {} : { domain: '.joshmoxey.com'},
  secure: true
}))

// Passport init
app.use(passport.initialize());
app.use(passport.session());

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

app.use(main);

// Set Port
app.set('port', (process.env.PORT || 1001));

app.listen(app.get('port'), function () {
  console.log('Server started on port ' + app.get('port'));
});
