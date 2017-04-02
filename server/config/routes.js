//get and post requests
var categoriesController = require('../categories/categoriesController.js');
var userController = require('../users/userController.js');


module.exports = function(app, express) {

  app.post('/api/signin', userController.signin);
  app.post('/api/signup', userController.signup);
  app.get('/api/users/signedin', userController.checkAuth);


  app.get('/api/categories', categoriesController.getCategories);
  app.post('/api/categories', categoriesController.newCategory);

  app.post('/api/belief', categoriesController.addBelief);

  // app.post('/api/categories', categoriesController.newCategory);

  // app.patch('/api/categories', categoriesController.removeDuplicateCategory);

};