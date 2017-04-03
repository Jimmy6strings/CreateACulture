angular.module('app.categories', ['app.checklist-model'])

.controller('categoriesController', function($scope, Categories) {
  $scope.data = {};
// $scope is the intermediary between what the user sees and the
// factory. $scope methods grab from the factory and display it
// via html
  $scope.choices = []; 

  $scope.getAll = function() {
    Categories.getCategories().then(function(data){
      console.log(data);
      $scope.data.categories = data;
      console.log(data);
    }).catch(function(err) {
      console.log(err);
    })
  };

  $scope.getAll();

  console.log($scope.data.choices);

});