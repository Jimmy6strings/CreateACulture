var jwt = require('jwt-simple');
var User = require('./userModel.js');
var db = require('../index.js');
require('mongoose');
db.Promise = global.Promise;


module.exports = {
  signin: function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne(function (err, user) {
      if (err) {
        next(new Error("user does not exist"))
      } else {
        return user.comparePassword(password, function(foundUser) {
          if (foundUser) {
            var token = jwt.encode(user, 'secret');
            res.json({token: token});
          } else {
            return next(new Error('no user'));
          }
        });
      }
    })
  },
  signup: function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne(function (err, user) {
      if (user) {
        next(new Error('user already exists'))
      } else {
        return createUser({
          username: username,
          password: password
        });
      }
    })
  }

}