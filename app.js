var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/heroji', function(req, res) {
  res.json(["nemanja", "dositej"]);
});


app.post('/login', function(req, res) {
  res.write('login');
  res.end();
});

app.use(function(req, res, next) {
  res.write('stranica ne postoji');
  res.end();
});

module.exports = app;
