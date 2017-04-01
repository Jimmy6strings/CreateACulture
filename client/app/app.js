angular.module('app', [
  'auth',
  'categories',
  'ngRoute'

  ])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/signin', {
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
    })
    .when('/signup', {
      templateUrl: 'app/auth/signup.html',
      controller: 'AuthController'
    })
    .when('/', {
      templateUrl: 'app/index.html',
      controller: ''
    })
    .otherwise({
      redirectTo: '/links'
    });