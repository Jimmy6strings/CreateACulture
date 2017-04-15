var Category = require('./categoriesModel.js');
var db = require('../index.js');
var Q = require('q');

var findCategory = Q.nbind(Category.findOne, Category);
var createCategory = Q.nbind(Category.create, Category);
var findAllCategories = Q.nbind(Category.find, Category);
var findOneAndChange = Q.nbind(Category.findOneAndUpdate, Category);

module.exports = {

  getCategories: function(req, res, next) {
    console.log("reached getCategories " + req);
    findAllCategories({})
    .then(function (category) {
        res.json(category);
      })
      .fail(function (error) {
        next(error);
      });
  },

  addBelief: function(req, res) {
    findOneAndChange(
      {name: req.body.name},
      {$push: {beliefs: req.body.belief}},
      {safe: true, upsert: true}
    ).catch(function(err){
      console.log(err);
    });
  },

  getRandomBelief: function(req, res) {
    findCategory({name: req.body.name})
    .then(function(cat){
      res.json(cat.beliefs[Math.floor(Math.random()*(cat.beliefs.length))]);
    })
    .fail(function(error) {
      next(error);
    });
  },

};

