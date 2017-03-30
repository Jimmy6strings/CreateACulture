var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

// app.use(express.static(__dirname + '/../client'))
//  console.log('this is directory name' + __dirname);

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/createaculture');

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, '/../client/index.html'));
 });



var port = process.env.PORT || 4000;
app.listen(port, function () {
  console.log('listening on port 4000!')
})

module.exports = app;