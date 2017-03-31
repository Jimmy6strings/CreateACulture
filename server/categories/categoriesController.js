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
    // console.log(req);
    Category.find({}, function(err, categories){
      if(!err){
        res.send(categories);
        console.log("GET the name! " + categories[0].name)
        console.log("GET the belief! " + categories[0].beliefs);
      } else {
        throw err;
      }
    })
      // .fail(function (error) {
      //   next(error);
      // });
  },
  //create a new category using findCategory
  newCategory: function(req, res) {
    Category.remove({}, function(err) {
      console.log('collection removed')
    });
    console.log(req.body);
    console.log("this is the category name.. " + req.body.name);
    console.log("this is the category belief.. " + req.body.beliefs);

    var newCat = new Category({
      name: req.body.name,
    });

    newCat.beliefs.push(req.body.beliefs);

    newCat.save(function(err, newCat) {
      if(err) {
        res.status(500).send(err);
      } else {
        console.log("this is the new category name " + newCat)
        res.status(200).send(newCat);
      }
    });
  }



  // addBelief: function(req, res) {
  //   console.log(req.body);
  //   Category.update({name: req.body.name})
  //     .exec({$push: {beliefs: req.body.belief}});
  // }





}