var morgan = require('morgan');
var session = require('express-session');
var bodyParser = require('body-parser');

module.exports = function (app, express) {

  app.use(morgan('dev'));
  app.use(session({secret: 'ssshhhhh'}));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));
  console.log('this is directory name in middleware: ' + __dirname);

};