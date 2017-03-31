var Category = require('./categoriesModel.js');
var db = require('../index.js');
require('mongoose');
db.Promise = global.Promise;

module.exports = {
  getCategories: function(req, res, next) {
    //console.log("reached getCategories");
    //console.log(req);
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
  newCategory: function(req, res) {
    console.log("reched newCategory function ");
    console.log(req.body);
    console.log(req.body.name);
    var newCat = new Category({
      name: req.body.name;
    })

    newCat.beliefs.push(req.body.belief)

    newCat.save(function(req, res) {
      if(err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(newCat);
      }
    });
  },

  // addBelief: function(req, res) {
  //   console.log(req.body);
  //   Category.update()
  // }
}