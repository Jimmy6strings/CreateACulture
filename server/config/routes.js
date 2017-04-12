var categoriesController = require('../categories/categoriesController.js');
var userController = require('../users/userController.js');


module.exports = function(app, express) {
  // post already signed up user
  app.post('/api/signin', userController.signin);
  // post new user
  app.post('/api/signup', userController.signup);
  // check user authentication
  app.get('/api/users/signedin', userController.checkAuth);
  // add belief to existing user category
  // app.post('/api/addbelief', userController.addUserBelief);
  // create new category specific only to that user
  app.post('/api/usercategories', userController.addUserCategory);
  // get all categories from main collection
  app.get('/api/categories', categoriesController.getCategories);
  // app.post('/api/categories', categoriesController.clearCategories);
  app.post('/api/addbeliefs', userController.addMainBeliefs);

  app.post('/api/addbelief', userController.addMainBelief);

  app.post('/api/getrandombelief', categoriesController.getRandomBelief);

};