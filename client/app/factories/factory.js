angular.module('app.factory', [])

.factory('Categories', function($http){

  var getCategories = function() {
    return $http({
      method: 'GET',
      url: 'api/categories'
    })
    .then(function(response){
      return response.data;
    });
  };

  //
  var addBelief = function(category, belief) {
    return $http({
      method: 'POST',
      url: '/api/belief',
      data: {
        name: category,
        belief: belief
      }
    })
    .then(function(response){
      return response;
    })
  };

  return {
    getCategories: getCategories
  }
})

.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;

    });
  };

  var signup = function (user) {
    //console.log("this is the factory user")
    //console.log(user)
    return $http({
      method: 'POST',
      url: '/api/signup',
      data: user
    })
    .then(function (resp) {
       return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.createaculture');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.createaculture');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
