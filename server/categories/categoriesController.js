var Category = require('./categoriesModel.js');
var db = require('../index.js');
var Q = require('q');

var findCategory = Q.nbind(Category.findOne, Category);
var createCategory = Q.nbind(Category.create, Category);
var findAllCategories = Q.nbind(Category.find, Category);

module.exports = {

  getCategories: function(req, res, next) {
    console.log("reached getCategories");
    // console.log(req);

    findAllCategories({})
    .then(function (category) {
        res.json(category);
      })
      .fail(function (error) {
        next(error);
      });
  },
  //create a new category using findCategory
  newCategory: function(req, res) {

    Category.remove({}, function(err) {
      console.log('collection removed')
    });


    // var categories = ["Hope", "Faith", "Kindness", "Grit", "Hard_Work", "Prudence", "Temperance"];
    // var coreBeliefs = ["Tomorrow will be better", "Pray every day", "Always be kind", "Never give up",
    //                     "Hard Work equals love and acceptance", "Keep a ledger", "Meditate"];

    // newCat.save(function(err, newCat) {
    //   if(err) {
    //     res.status(500).send(err);
    //   } else {
    //     console.log("this is the new category name " + newCat)
    //     res.status(200).send(newCat);
    //   }
    // });
  },

  removeLastCategory: function(req, res) {
    console.log("removing this category: " + req.body.name)
    Category.remove({name: req.body.name}, function(err, name) {
      if (err) {
        return res.send(err);
      } else {
        res.json({ message: `deleted ${req.body.name}` })
      }
      console.log('category removed')
    });
  },


  addBelief: function(req, res) {

    Category.findOneAndUpdate(
      {name: req.body.name},
      {$push: {beliefs: req.body.belief}},
      {safe: true, upsert: true},
      function(err, cat){
        if(err){
          console.log(err);
          res.send(err);
        } else {
          console.log(req.body.belief);
          res.status(200).send(cat);
        }
      })
    }
}