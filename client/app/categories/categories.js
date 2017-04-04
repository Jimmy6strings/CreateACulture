angular.module('app.categories', ['app.checklist-model'])

.controller('categoriesController', function($scope, Categories) {
  $scope.data;
// $scope is the intermediary between what the user sees and the
// factory. $scope methods grab from the factory and display it
// via html
  $scope.choices = []; 

  $scope.workable = [];

  $scope.getAll = function() {
    Categories.getCategories().then(function(data){
      $scope.data = data;
      for(var i = 0; i < data.length; i ++){
        $scope.workable.push(data[i].name); 
      }
      for(var i = 0; i < $scope.workable.length; i ++) {
        obj[$scope.workable[i]] = data[i].beliefs;
      }
      console.log("Obj:", obj);
    }).catch(function(err) {
      console.log(err);
    })
  };
  
  var obj = {};

  $scope.primary = [];

  $scope.questionTwoDiv = false;
  $scope.sevenBeliefs = false;

  $scope.sevenBeliefs = [];

  $scope.grabResponseAndShowQuestionTwo = function() {
    $scope.questionTwoDiv = true;
  }

  $scope.grabResponseAndShowBeliefs = function() {
    $scope.sevenBeliefs = true;

  }

  // var item = items[Math.floor(Math.random()*items.length)];

  // $scope.getSevenBeliefs = function() {
  //   for(var cat in )


  //   for(var i = 0; i < 5; i ++) {
  //     $scope.sevenBeliefs.push($scope.data)
      
  //   }

  // }

  $scope.getAll();

  $scope.check = $scope.choices.length;

  $scope.checkChanged = function(item){
    if(item) $scope.checked++;
    else $scope.checked--;
  }

  $scope.limit = 3;

});