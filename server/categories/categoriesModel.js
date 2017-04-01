var mongoose = require('mongoose');
var assert = require('assert')
var db = require('../index.js');

//up to 5 questions for rendering categories
//have descriptions for each category and question

var categorySchema = new mongoose.Schema({
  name: String,
  beliefs: {
    type: Array,
    unique: true
  }
});

// var data = [
//   {
//     "name":"Faith",
//     "beliefs":"['first Faith saying', 'second saying']"
//   },
//   {
//     "name":"Hope",
//     "beliefs":"['first Hope saying', 'second saying']"
//   },
//   {
//     "name":"Kindness",
//     "beliefs":"['first Kindness saying', 'second saying']"
//   },
//   {
//     "name":"Hard_Work",
//     "beliefs":"['first Hard Work saying', 'second saying']"
//   },
//   {
//     "name":"Perseverance",
//     "beliefs":"['first Perseverance saying', 'second saying']"
//   },
//   {
//     "name":"Prudence",
//     "beliefs":"['first Prudence saying', 'second saying']"
//   },
//   {
//     "name":"Temperance",
//     "beliefs":"['first Temperance saying', 'second saying']"
//   }
// ];

var Category = mongoose.model('Category', categorySchema)

// Category.collection.insertMany(data, function(err,r) {
//   // assert.equal(null, err);
//   // assert.equal(7, r.insertedCount);
//   //db.close();
// })

module.exports = Category;