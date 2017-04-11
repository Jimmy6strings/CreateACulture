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

  $scope.gmail = {
    username : "",
    email : ""
  };

  $scope.onGoogleLogin = function() {
    var params = {
      'clientid': '199671314390-k74j4i5h1ud1r772mv057vrrp9227fh5.apps.googleusercontent.com',
      'client secret': 'FKatdjSp49W7SO5AoewqXUpj',
      'cookiepolicy': 'single_host_origin',
      'callback': function(result) {
        if(result['status']['signed_in']) {
          console.log(gapi);
          var request = gapi.client.plus.people.get(
            {
              'userId': 'me'
            }
          );
          request.execute(function(resp) {
            $scope.$apply(function() {
              console.log("this is your name ", resp.name);
              console.log("this is your email ", resp.emails[0].value);
              $scope.gmail.username = resp.displayName;
              $scope.gmail.email = resp.emails[0].value;
              console.log('user is connected through gmail')
            });
          });
        } else {
          console.log('not authorized by google');
        }
    },
      'approvalprompt': 'force',
      'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
    };

    gapi.auth.signIn(params);
  }

   $scope.facebook = {
    username : "",
    email : ""
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