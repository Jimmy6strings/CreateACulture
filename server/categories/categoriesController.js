var Category = require('./categoriesModel.js');
var Q = require('q');

var findCategory = Q.nbind(Category.findOne, Category);
var createCategory = Q.nbind(Category.create, Category);
var findAllCategories = Q.nbind(Category.find, Category);

module.exports = {
  getCategories: function(req, res, next) {
    findAllCategories({})
      .then(function(category) {
        console.log("got all the categories " + category);
        res.json(category);
      })
      .fail(function (error) {
        next(error);
      });
  },
  //create a new category using findCategory
  newCategory: function(req, res, next) {
    var category = req.body.name;
    findCategory({name: name})
      .then(function (name) {
        if (name) {
          var newCategory = {
            name: name,
            beliefs: []
          };
          return createCategory(newCategory);
        }
      })
      .then(function (createdCategory) {
        if(createdCategory) {
          console.log("created new category " + createdCategory);
          res.json(createdCategory);
        }
      })
      .fail(function (err) {
        next(err);
      });
  }
}