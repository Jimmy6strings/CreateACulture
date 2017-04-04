var Category = require('./categoriesModel.js');
var db = require('../index.js');
var Q = require('q');

var findCategory = Q.nbind(Category.findOne, Category);
var createCategory = Q.nbind(Category.create, Category);
var findAllCategories = Q.nbind(Category.find, Category);
var findOneAndChange = Q.nbind(Category.findOneAndUpdate, Category);


// var category = new Category({
//     "name":"Temperance",
//     "beliefs":[
//       "In times of temptation, reflect on what you're grateful for"
//     ]
//   })

module.exports = {

  getCategories: function(req, res, next) {
    console.log("reached getCategories " + req.body.name);
    findAllCategories({})
    .then(function (category) {
        res.json(category);
        console.log(category);
      })
      .fail(function (error) {
        next(error);
      });
  },

  //  clearCategories: function(req, res) {
  //   Category.remove({}, function(err) {
  //     console.log('collection removed')
  //   });

  // //   // newCat.save(function(err, newCat) {
  // //   //   if(err) {
  // //   //     res.status(500).send(err);
  // //   //   } else {
  // //   //     console.log("this is the new category name " + newCat)
  // //   //     res.status(200).send(newCat);
  // //   //   }
  // //   // });
  // //},


  // // removeLastCategory: function(req, res) {
  // //   console.log("removing this category: " + req.body.name)
  // //   Category.remove({name: req.body.name}, function(err, name) {
  // //     if (err) {
  // //       return res.send(err);
  // //     } else {
  // //       res.json({ message: `deleted ${req.body.name}` })
  // //     }
  // //     console.log('category removed')
  // //   });

  // // removeDuplicateCategory: function(req, res) {
  // //   console.log("removing this category: " + req.body.name)
  // //   Category.remove({name: req.body.name}, function(err, name) {
  // //     if (err) {
  // //       return res.send(err);
  // //     } else {
  // //       res.json({ message: `deleted ${req.body.name}` })
  // //     }
  // //     console.log('category removed')
  // //   });

  // },

  addBelief: function(req, res) {

    findOneAndChange(
      {name: req.body.name},
      {$push: {beliefs: req.body.belief}},
      {safe: true, upsert: true}
    ).catch(function(err){
      console.log(err);
    });

  }
};

