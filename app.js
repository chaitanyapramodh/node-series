var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var errorhandler = require('./utilities/errorlogger')
var fs= require('fs')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join('./', 'requestlogger.log'), { flags: 'a' })
 
// setup the logger
app.use(logger('combined', { stream: accessLogStream }))
app.use(errorhandler);

// app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());


app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(4444,()=>{
  console.log("app listening in port 4444")
})

module.exports = app;
