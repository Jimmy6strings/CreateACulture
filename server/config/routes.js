//get and post requests
var categoriesController = require('../categories/categoriesController.js');
var userController = require('../users/userController.js');


module.exports = function(app, express) {
  //post already signed up user
  app.post('/api/signin', userController.signin);
  //post new user
  app.post('/api/signup', userController.signup);
  //check user authentication
  app.get('/api/users/signedin', userController.checkAuth);

  //
  app.get('/api/categories', categoriesController.getCategories);
  //app.post('/api/categories', categoriesController.clearCategories);
  app.post('/api/users/post', userController.addPost);

  // app.post('/api/categories', categoriesController.newCategory);

  // app.patch('/api/categories', categoriesController.removeDuplicateCategory);

};