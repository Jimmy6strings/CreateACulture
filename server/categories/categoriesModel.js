var mongoose = require('mongoose');


//up to 5 questions for rendering categories
//have descriptions for each category and question

var categorySchema = new mongoose.Schema({
  name: String,
  beliefs: Array
});

module.exports = mongoose.model('Category', categorySchema)