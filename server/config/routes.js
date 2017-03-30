//get and post requests
var categoriesController = require('../categories/categoriesController.js');
var userController = require('../users/userController.js');

module.exports = function(app, express) {
  app.get('/api/users/signin', userController)
  app.post('api/users/signup', userController)
  app.get('api/users/signedin', userController)

  app.get('/api/categories', categoriesController.getCategories)
  app.post('/api/categories', categoriesController.newCategory);

}