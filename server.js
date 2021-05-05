var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const flash = require('connect-flash');
const session = require('express-session');
const methodOverride = require('method-override')
require('./config/database')


const passport = require('passport');

//ROUTES
var indexRouter = require('./routes/index');
const newRouter = require('./routes/new')
const usersRouter = require('./routes/users')
const postsRouter = require('./routes/posts')
const checkoutRouter = require('./routes/checkout')


var app = express();

//passport require
require('./config/passport')(passport)


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))

//EXPRESS SESSION
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

//PASSPORT MIDDLEWARE
app.use(passport.initialize());
app.use(passport.session());


app.use(flash())

//MIDDLEWARE FOR GLOBAL USER VARIABLE
app.use(function(req, res, next){
  res.locals.user = req.user
  next()
})


//routes
app.use('/', indexRouter);
app.use('/new', newRouter);
app.use('/users', usersRouter)
app.use('/posts', postsRouter)
app.use('/checkout', checkoutRouter)




// catch 404 and forward to error handler
app.use(function(req, res, next) {
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
