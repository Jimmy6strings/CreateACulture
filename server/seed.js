var seeder = require('mongoose-seed');
var data = require('./seeds/categories.json');

seeder.connect('mongodb://localhost:27017/createaculture', function () {

  seeder.loadModels(['./categories/categoriesModel.js']);

  seeder.clearModels(['Category'], function () {
    seeder.populateModels(data);
  });

  seeder.seed(data, {dropDatabase: true}).then(function(dbData) {
    dbData.categories
}).catch(function(err) {
    throw err;
});


