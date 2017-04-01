var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cat = require('./categories/categoriesController.js');
var user = require('./users/userController.js');
mongoose.Promise = require('bluebird');


var app = express();

 //require('./config/routes.js')(app, express);
 //require('./config/middleware.js')(app, express);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'))
 console.log('this is directory name' + __dirname);

mongoose.connect('mongodb://localhost/createaculture');

app.post('/api/signup', user.signup);
app.post('/api/signin', user.signin);
app.post('/api/categories', cat.newCategory);
app.get('/api/categories', cat.getCategories);
//app.patch('/api/categories', cat.removeDuplicateCategory);
// app.post('/api/addbelief', cat.addBelief);

var port = process.env.PORT || 4000;
app.listen(port, function () {
  console.log('listening on port 4000!')
})

module.exports = app;