// var Q = require('q');
var jwt = require('jwt-simple');
var User = require('./userModel.js');
var db = require('../index.js');
var mongoose = require('mongoose');
var Promise = require("bluebird");

// var newUser = User({
//   name: 'james Mitchell',
//   username: 'jimmystring12',
//   password: 'password2',
//   admin: true
// });

// save the user
// newUser.save(function(err) {
//   if (err) throw err;

//   console.log('User created!');
// });
module.exports = {
  signup: function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    User.find(function (err, user) {
      if (err) {
        next(new Error("user does not exist"))
        console.log(user);
      } else {
        res.send(user);
        console.log(user.name);
        return User.comparePassword(password, function(foundUser) {
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
  signin: function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne(function (err, user) {
      if (user) {
        next(new Error('user already exists'))
      } else {
        var newUser = User({
        name: 'james Mitchell',
        username: 'jimmystring11',
        password: 'password2',
        admin: true
      });

      // save the user
      newUser.save(function(err) {
        if (err) throw err;
          console.log('User created!');
        });
        // return createUser({
        //   username: username,
        //   password: password
        // });
      }
    })
  }

}

