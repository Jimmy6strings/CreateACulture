angular.module('categories', [])

.controller('categoriesController', function($scope, Categories))

// $scope is the intermediary between what the user sees and the 
// factory. $scope methods grab from the factory and display it 
// via html

  $scope.getAll = function() {
    Categories.getCategories().then(function(data){
      $scope.data.categories = data;
    }).catch(function(err) {
      console.log(err);
    })
  };

  $scope.getAll();

});