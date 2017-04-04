var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/createaculture');

require('./config/routes.js')(app, express);
require('./config/middleware.js')(app, express);


// app.use(express.static(__dirname + '/../client'))
//  console.log('this is directory name ' + __dirname);

var port = process.env.PORT || 4000;
app.listen(port, function () {
  console.log('listening on port ' + port)
})

module.exports = app;