angular.module('app.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.createaculture', token);
        $location.path('/index.html');
        console.log("user signed in")
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
        console.log("New user signed up!")
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});