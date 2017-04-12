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

  var getRandomBelief = function(category, itemId) {
    return $http({
      method: 'POST',
      url: 'api/getrandombelief',
      data: {
        name: category
      }
    })
    .then(function(response) {
      console.log("Response.data: ", response.data);
      return response.data;
    })
  };



  return {
    getCategories: getCategories,
    getRandomBelief: getRandomBelief
  }
})

// .factory('FabricRender', function(fabric) {
//   var canvas;
//   function render() {
//     if(!canvas) {
//       return;
//     }
//   // your render logic with provided canvas instance

    
//   }

//   function init(canvasInstance) {
//     canvas = canvasInstance;
//     render();
//   }
//   return {
//     init: init
//     // do some clean up by exporting destroy function
//   }
// })

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
       return resp;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.createaculture');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.createaculture');
    $location.path('/signin');
  };

  var addBeliefsToUser = function(beliefsArray) {
    var username = $window.localStorage.getItem('user');
    return $http({
      method: 'POST',
      url: '/api/addbeliefs',
      data: {
        username: username,
        beliefs: beliefsArray
      }
    })
    .then(function(response){
      return response;
    })
  };

  var addBeliefToUser = function(beliefString) {
    var username = $window.localStorage.getItem('user');
    return $http({
      method: 'POST',
      url: '/api/addbelief',
      data: {
        username: username,
        belief: beliefString
      }
    })
    .then(function(response){
      return response;
    })
  };

  var updateAddedBelief = function(index, updated) {
    console.log("Updated: ", updated);
    var username = $window.localStorage.getItem('user');
    return $http({
      method: 'PUT',
      url: 'api/updateaddedbelief',
      data: {
        username: username,
        index: index,
        updated: updated
      }
    })
    .then(function(response) {
      console.log("Response.data in updateAddedBelief: ", response.data);
      return response.data;
    })
  };

  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout,
    addBeliefsToUser: addBeliefsToUser,
    addBeliefToUser: addBeliefToUser,
    updateAddedBelief: updateAddedBelief
  };
});
