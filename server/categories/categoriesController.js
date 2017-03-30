var Category = require('./categoriesModel.js');
var Q = require('q');

var findCategory = Q.nbind(Category.findOne, Category);
var createCategory = Q.nbind(Category.create, Category);
var findAllCategories = Q.nbind(Category.find, Category);

module.exports = {
  getCategories: function(req, res, next) {
    findAllCategories({})
      .then(function(category) {
        res.json(category);
      })
      .fail(function (error) {
        next(error);
      });
  },
  //create a new category using findCategory
}