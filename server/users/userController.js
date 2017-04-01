var jwt = require('jwt-simple');
var User = require('./userModel.js');
var mongoose = require('mongoose');
var Q = require('q');

var findUser = Q.nbind(User.findOne, User);
var createUser = Q.nbind(User.create, User);
//var findUser = bluebird.nbind(User.findOne, User);
//var createUser = bluebird.nbind(User.create, User);

// var newUser = User({
//   name: 'james Mitchell',
//   username: 'jimmystring12',
//   password: 'password2',
//   admin: true
// });


// newUser.save(function(err) {
//   if (err) throw err;

//   console.log('User created!');
// });

module.exports = {
  signin: function (req, res, next) {
    var email = req.body.email;
    var password = req.body.password;

    findUser({email: email})
      .then(function (user) {
        if (!user) {
          next(new Error('User does not exist'));
        } else {
          return user.comparePassword(password)
            .then(function (foundUser) {
              if (foundUser) {
                var token = jwt.encode(user, 'secret');
                res.json({token: token});
              } else {
                return next(new Error('No user'));
              }
            });
        }
      })
      .fail(function (error) {
        next(error);
      });
  },

  signup: function (req, res, next) {
    var email = req.body.email;
    var password = req.body.password;

    // check to see if user already exists
    findUser({email: email})
      .then(function (user) {
        if (user) {
          next(new Error('user already exists!'));
        } else {
          // make a new user if not one
          return createUser({
            email: email,
            password: password
          });
        }
      })
      .then(function (user) {
        // create token to send back for auth
        var token = jwt.encode(user, 'secret');
        res.json({token: token});
      })
      .fail(function (error) {
        next(error);
      });
  }


};

