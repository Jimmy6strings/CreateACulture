var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserCategorySchema = new Schema({
  username: String,
  category: String,
  beliefs: [String]
});

module.exports = mongoose.model('userCategories', UserCategorySchema);