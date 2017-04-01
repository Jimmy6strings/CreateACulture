// var Q = require('q');
var jwt = require('jwt-simple');
var User = require('./userModel.js');
var db = require('../index.js');
var mongoose = require('mongoose');
// db.Promise = global.Promise;
// var Q = require('q');
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

// // save the user
// newUser.save(function(err) {
//   if (err) throw err;

//   console.log('User created!');
// });
module.exports = {
  signin: function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    findUser({username: username})
      .then(function (user) {
        if (!user) {
          next(new Error('User does not exist'));
        } else {
          return user.comparePasswords(password)
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
    var username = req.body.username;
    var password = req.body.password;

    // check to see if user already exists
    findUser({username: username})
      .then(function (user) {
        if (user) {
          next(new Error('User already exist!'));
        } else {
          // make a new user if not one
          return createUser({
            username: username,
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
  // signin: function (req, res, next) {
  //   var username = req.body.username;
  //   var password = req.body.password;

  //   User.findOne(function (err, user) {
  //     if (err) {
  //       next(new Error("user does not exist"))
  //       console.log(user);
  //     } else {
  //       res.send(user);
  //       console.log(user.name);
  //       // return User.comparePassword(password, function(foundUser) {
  //       //   if (foundUser) {
  //       //     var token = jwt.encode(user, 'secret');
  //       //     res.json({token: token});
  //       //   } else {
  //       //     return next(new Error('no user'));
  //       //   }
  //       // });
  //     }
  //   })
  // },
  // signup: function (req, res, next) {
  //   var name = req.body.name;
  //   var username = req.body.username;
  //   var password = req.body.password;

  //   User.findOne(function (err, user) {
  //     if (user) {
  //       console.log("this is the requested name " + name)
  //       next(new Error('user already exists'))
  //     } else {
  //       var newUser = User({
  //       name: name,
  //       username: username,
  //       password: password,
  //       //admin: true
  //     });

  //     // save the user
  //     newUser.save(function(err) {
  //       if (err) throw err;
  //         console.log('User created!');
  //       });
  //       // return createUser({
  //       //   username: username,
  //       //   password: password
  //       // });
  //     }
  //   })
  // }

<<<<<<< HEAD
};
=======
}

>>>>>>> Add belief not working, rebasing for authentication and begin working on frontend
