var seeder = require('mongoose-seed');

var data = require('seed.json');

seeder.connect('mongodb://localhost:27017/createaculture', function () {

  seeder.loadModels(['./categories/categoriesModel.js']);

  seeder.clearModels(['Category'], function () {
    seeder.populateModels(data);
  });

});
