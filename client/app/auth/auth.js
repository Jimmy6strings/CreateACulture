angular.module('app.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signin = function () {
    console.log($scope.user);
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.createaculture', token);
        $location.path('/index.html');

      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.createaculture', token);
        $location.path('/index.html');

      })
      .catch(function (error) {
        console.error(error);
      });
  };
});