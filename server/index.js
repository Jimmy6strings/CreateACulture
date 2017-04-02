var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cat = require('./categories/categoriesController.js');
var user = require('./users/userController.js');
mongoose.Promise = require('bluebird');

var app = express();

mongoose.connect('mongodb://localhost/createaculture');

require('./config/routes.js')(app, express);
require('./config/middleware.js')(app, express);

var port = process.env.PORT || 4000;
app.listen(port, function () {
  console.log('listening on port ' + port)
})

module.exports = app;