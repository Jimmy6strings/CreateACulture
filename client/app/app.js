angular.module('app', [
  'app.factory',
  'app.auth',
  'app.categories',
  'ngRoute'

  ])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/signin', {
      templateUrl: './app/auth/signin.html',
      controller: 'AuthController'
    })
    .when('/signup', {
      templateUrl: './app/auth/signup.html',
      controller: 'AuthController'
    })
    .when('/index.html', {
      templateUrl: './app/categories/categories.html',
      controller: 'categoriesController'
    })
    .otherwise({
      redirectTo: '/index.html'
    });
});