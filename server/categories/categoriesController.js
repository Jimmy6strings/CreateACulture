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
  }

};

