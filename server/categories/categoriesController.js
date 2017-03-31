var Category = require('./categoriesModel.js');
//var Q = require('q');

// var findCategory = Q.nbind(Category.findOne, Category);
// var createCategory = Q.nbind(Category.create, Category);
// var findAllCategories = Q.nbind(Category.find, Category);

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
    var newName = req.body.name;
    console.log("this is the post request " + req.body);
    Category.findOne({name: newName})
      .then(function (name) {
        if (name) {
          res.send(name);
        }
      })
      .then(function (title) {
        if (title) {
          var newCategory = {
            name: title,
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