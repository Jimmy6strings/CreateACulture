var Category = require('./categoriesModel.js');
var db = require('../index.js');

db.Promise = global.Promise;
// var Q = require('q');

// var findCategory = Q.nbind(Category.findOne, Category);
// var createCategory = Q.nbind(Category.create, Category);
// var findAllCategories = Q.nbind(Category.find, Category);

module.exports = {
  getCategories: function(req, res, next) {
    console.log("reached getCategories");
    console.log(req);
    Category.find({})
      .then(function(category) {
        console.log("got all the categories " + category);
        res.json(category);
      })
      .fail(function (error) {
        next(error);
      });
  },
  //create a new category using findCategory
  newCategory: function(req, res) {
    console.log("reched newCategory function ");
    console.log(req.body);
    console.log(req.body.name);
    var category = req.body.name;
    Category.findOne({name: category})
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