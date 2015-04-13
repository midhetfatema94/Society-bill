var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var expressSession = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
var http = require('http');
var mongoose = require('mongoose');
var passport = require('passport');
var lusca = require('lusca');
var LocalStrategy = require('passport-local').Strategy;

var router = express.Router();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(expressSession({
    secret: 'victory',
    resave: true,
    saveUninitialized: true
  }));

//Lusca configuration
// app.use(lusca.csrf());
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.p3p('ABCDEF'));
app.use(lusca.hsts({maxAge: 31536000, includeSubDomains: true}));
app.use(lusca.csp({ /* ... */}));
app.use(lusca.xssProtection(true));

app.use(passport.initialize());
app.use(passport.session());
// app.use(express.static(path.join(__dirname, 'public')));

var routes = require('./routes')({appObject:app});
var routes = require('./user_modules/users/routes')({appObject:app});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});

// passport config
var Users = require('./user_modules/users/schema');
passport.use(new LocalStrategy(Users.authenticate()));
passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());

// mongoose
mongoose.connect('mongodb://localhost/bill', function(err, res){
  if(!err){
    console.log('Database connected successfully');
  }
  else{
    console.log('Database not connected');
  }
});



app.use(router);

module.exports = app;
