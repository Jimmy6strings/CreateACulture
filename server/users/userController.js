var jwt = require('jwt-simple');
var User = require('./userModel.js');
var db = require('../index.js');
require('mongoose');
db.Promise = global.Promise;
