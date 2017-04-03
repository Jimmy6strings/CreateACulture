var mongoose = require('mongoose');
var assert = require('assert');
var bluebird = require('bluebird');
var db = require('../index.js');

//up to 5 questions for rendering categories
//have descriptions for each category and question

var categorySchema = new mongoose.Schema({
  name: String,
  beliefs: [String]
});

var data = [
  {
    "name":"Faith",
    "beliefs":[
      "Pray every morning",
      "You will argue with yourself that there is no way forward. But with God, nothing is impossible"
    ]
  },
  {
    "name":"Hope",
    "beliefs":[
      "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence",
      "Learn from yesterday. Live for today. Hope for tomorrow",
      "Keep your face always toward the sunshine -- and shadows will fall behind you",
      "Dismiss what insults your soul and your very flesh shall be a great poem",
      "You must travel it by yourself. It is not far. It is within reach"
    ]
  },
  {
    "name":"Kindness",
    "beliefs":[
      "Always be kind",
      "People are flawed. Be patient with them",
      "It's easy to see the splinter in someone else's eye and miss the log in your own",
      "Be curious, not judgmental",
      "I do not ask the wounded person how he feels, I myself become the wounded person"
    ]
  },
  {
    "name":"Hard_Work",
    "beliefs":[
      "Feeling bad? WORK your cares away",
      "Wake up early"
    ]
  },
  {
    "name":"Perseverance",
    "beliefs":[
      "Never, ever quit"
    ]
  },
  {
    "name":"Prudence",
    "beliefs":[
      "Invest one-fourth of what you earn"
    ]
  },
  {
    "name":"Temperance",
    "beliefs":[
      "In times of temptation, reflect on what you're grateful for"
    ]
  }
];

var Category = mongoose.model('Category', categorySchema)

Category.collection.insertMany(data, function(err,r) {
  // assert.equal(null, err);
  // assert.equal(7, r.insertedCount);
  //db.close();
})

module.exports = Category;