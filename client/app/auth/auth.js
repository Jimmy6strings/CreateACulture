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

  $scope.signout = function () {
    Auth.signout($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.createaculture', token);
        $location.path('/signin');
        console.log('user has signed out!')
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  $scope.onFBLogin = function() {
    FB.login(function(response) {
      if(response.authResponse) {
        FB.api('/me', 'GET', {fields: 'email, first_name, name, id, picture'}, function(response) {
          $scope.$apply(function() {
              $scope.facebook.username = response.name;
              // $scope.facebook.email = response.email;
              $scope.fb_image = response.picture.data.url;
              console.log(response);
            });
        })
      } else {
        console.log('not authorized by facebook');
      }
    }, {
        scope: 'email, user_likes',
        return_scopes: true
    });
  }


});