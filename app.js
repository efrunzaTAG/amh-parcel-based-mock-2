var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//const cors = require('cors')({origin: true});
const cors = require('cors');

var indexRouter = require('./routes/index');
var quotesRouter = require('./routes/quotes');
var productsRouter = require('./routes/products');
var lotsRouter = require('./routes/lots');
var buildingsRouter = require('./routes/buildings');
var unitsRouter = require('./routes/units');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cors);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/quotes', quotesRouter);
app.use('/products', productsRouter);
app.use('/lots', lotsRouter);
app.use('/buildings', buildingsRouter);
app.use('/units', unitsRouter);

module.exports = app;
