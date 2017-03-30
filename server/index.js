var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/createaculture');

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, '../index.html'));
 });

var port = process.env.PORT || 4000;
app.listen(port, function () {
  console.log('listening on port 4000!')
})

module.exports = app;