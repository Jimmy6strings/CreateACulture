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
<<<<<<< HEAD

        console.log("GET the name! " + categories[0].name)
        console.log("GET the belief! " + categories[0].beliefs);
        console.log("GET the name! " + categories[1].name)
        console.log("GET the belief! " + categories[1].beliefs);
=======
        // console.log("GET the name! " + categories[0].name)
        // console.log("GET the belief! " + categories[0].beliefs);
>>>>>>> Add belief not working, rebasing for authentication and begin working on frontend
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
<<<<<<< HEAD

    console.log(req.body);
    console.log("this is the category name.. " + req.body.name);
    console.log("this is the category belief.. " + req.body.beliefs);
=======
    Category.remove({}, function(err) {
      console.log('collection removed')
    });
    // res.send(200);
    // console.log(req.body);
    // console.log("this is the category name.. " + req.body.name);
    // console.log("this is the category belief.. " + req.body.beliefs);
>>>>>>> Add belief not working, rebasing for authentication and begin working on frontend

    // var categories = ["Hope", "Faith", "Kindness", "Grit", "Hard_Work", "Prudence", "Temperance"];
    // var coreBeliefs = ["Tomorrow will be better", "Pray every day", "Always be kind", "Never give up", 
    //                     "Hard Work equals love and acceptance", "Keep a ledger", "Meditate"];

        // var newCat = new Hope({
        //   belief: "Tomorrow will be better"
        // });
        // newCat.save(function(err, newCat) {
        //   if(err) {
        //     res.status(500).send(err);
        //   } else {
        //     console.log("this is the new category name " + newCat)
        //     res.status(200).send(newCat);
        //   }
        // });

<<<<<<< HEAD
    newCat.save(function(err, newCat) {
      if(err) {
        res.status(500).send(err);
      } else {
        console.log("this is the new category name " + newCat)
        res.status(200).send(newCat);
      }
    });
  },

  removeDuplicateCategory: function(req, res) {
    console.log("removing this category: " + req.body.name)
    Category.remove({name: req.body.name}, function(err, name) {
      if (err) {
        return res.send(err);
      } else {
        res.json({ message: `deleted ${req.body.name}` })
      }
      console.log('category removed')
    });
  }
=======
>>>>>>> Add belief not working, rebasing for authentication and begin working on frontend

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



    // Category.findOne({name: req.body.name})
    //   .exec(function(err, cat){
    //     if(err){
    //       console.log(err);
    //       res.send(err);
    //     } else {
    //       console.log(cat);
    //       cat.beliefs.push(req.body.belief);
    //       console.log("after pushed: ", cat);
    //       cat.update(function(err, cat) {
    //         if(err) {
    //           res.status(500).send(err);
    //         } else {
    //           // console.log("this is the new category name " + newCat)
    //           res.status(200).send(cat);

    //         }
    //       })
    //     }
    //   })
    // }


<<<<<<< HEAD

  // addBelief: function(req, res) {
  //   console.log(req.body);
  //   Category.update({name: req.body.name})
  //     .exec({$push: {beliefs: req.body.belief}});
  // }
=======
    // Category.update({name: req.body.name}, {$push: {beliefs: "req.body.belief"}}, function(err, data){
    //   if(err){
    //     console.log("belief:", req.body.belief);
    //     console.log(err);
    //     res.send(err);
    //   } else {
    //     res.status(200).send(data);
    //   }
    // });
  







    // });


      // doc.beliefs.push(req.body.belief);
      // console.log(doc.beliefs);
      // doc.save(function(err, cat) {
      //   if(err) {
      //     res.status(500).send(err);
      //   } else {
      //     // console.log("this is the new category name " + newCat)
      //     res.status(200).send(cat);

      //   }
      // });
    // console.log(req.body);
    // Category.findOne({name: req.body.name})
    //   .exec()
  
>>>>>>> Add belief not working, rebasing for authentication and begin working on frontend

// This one worked once. ONCE. After which getting 
// UnhandledPromiseRejectionWarning: Unhandled promise rejection 
// (rejection id: 1): MongoError: The field 'beliefs' must be an 
// array but is of type string in document 
// {_id: ObjectId('58deaf72fbf4058d9e358b9b')}


// the below pushes the new belief that shows in the 
// term console but this error is sent back to Postman:
// "errmsg": "The field 'beliefs' must be an array but 
//  is of type string in document {_id: ObjectId('58deaf72fbf4058d9e358b9f')}"


}