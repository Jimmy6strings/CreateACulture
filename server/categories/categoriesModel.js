var mongoose = require('mongoose');
var assert = require('assert');
//var data = require('../seeds/categories.json')
var bluebird = require('bluebird');
var db = require('../index.js');

//up to 5 questions for rendering categories
//have descriptions for each category and question

var categorySchema = new mongoose.Schema({
  name: String,
  beliefs: [String]
});

var Category = mongoose.model('Category', categorySchema);

var data = [
  {
    "name":"Faith",
    "beliefs":[
      "Pray every morning",
      "You will argue with yourself that there is no way forward. But with God, nothing is impossible",
      "Practice mindfulness",
      "Fasting brings you closer to God"
    ]
  },
  {
    "name":"Hope",
    "beliefs":[
      "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence",
      "Learn from yesterday. Live for today. Hope for tomorrow",
      "Keep your face always toward the sunshine -- and shadows will fall behind you",
      "Dismiss what insults your soul and your very flesh shall be a great poem",
      "You must travel it by yourself. It is not far. It is within reach",
      "In the middle of difficulty lies opportunity"
    ]
  },
  {
    "name":"Kindness",
    "beliefs":[
      "Always be kind",
      "People are flawed. So are you. Forgive them",
      "It's easy to see the splinter in someone else's eye and miss the log in your own",
      "Be curious, not judgmental",
      "I do not ask the wounded person how he feels, I myself become the wounded person",
      "Treat others as you would treat yourself"
    ]
  },
  {
    "name":"Hard_Work",
    "beliefs":[
      "Feeling bad? WORK your cares away",
      "Wake up two hours early to read, work or learn something new",
      "Pain is weakness leaving the body",
      "Hard Work brings love and acceptance",
      "Good things come to those who work hard and never give up",
      "Always make a total effort, even when the odds are against you",
      "Nothing of real value comes easily",
      "Luck is real. The harder you work, the more you have",
      "Without labor, nothing prospers",
      "No shortcuts. Work for it"

    ]
  },
  {
    "name":"Perseverance",
    "beliefs":[
      "Never, ever quit",
      "Quitting is for lesser souls",
      "Courage and perseverance have a magical talisman, before which difficulties disappear and obstacles crumble",
      "There's a difference between failing and losing. Quitting is losing. Failing brings you one step closer to your goal",
      "There are no dumb questions. Only dumb people that don't ask",
      "Pain is weakness leaving the body",
      "Failure brings you one step closer to your goal",
      "Work. Fail. Repeat.",
      "In the middle of difficulty lies opportunity"
    ]
  },
  {
    "name":"Prudence",
    "beliefs":[
      "Invest one-fourth of what you earn",
      "Keep a ledger",
      "Always pay yourself first",
      "Never spend what you haven't earned"
    ]
  },
  {
    "name":"Temperance",
    "beliefs":[
      "In times of temptation, reflect on what you're grateful for",
      "Meditation is exercise for your mind. Do it every day",
      "When faced with temptation, distract yourself",
      "Fiercely guard your environment against temptation",
      "Forgive yourself, redouble your efforts and move forward"
    ]
  }
];

   Category.collection.remove({}, function(err) {
        console.log('collection removed')
        });

   Category.collection.insertMany(data, function(err,r) {
    assert.equal(null, err);
    assert.equal(7, r.insertedCount);
    console.log("data collection added")
   });


module.exports = Category;