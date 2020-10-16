var express = require('express');
var path = require('path');
var logger = require('morgan');
var session = require('express-session');
var pug = require('pug');

var indexRouter = require('./routes/index-mihk');

var app = express();

const port = 3000;//process.env.PORT;
//const hostname = process.env.HOSTNAME;








// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser()); unused
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'steamed hams', resave: false, saveUninitialized: true}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//app.use(/route, file.js) to use different routers

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.redirect('/404');
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;




var express = require('express'),
app = express.createServer();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
res.send('hello world');
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
res.send('what???', 404);
});



