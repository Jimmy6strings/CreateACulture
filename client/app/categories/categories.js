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
      (console.log("Scope.data: ", $scope.data));
      for(var i = 0; i < data.length; i ++){
        $scope.workable.push(data[i].name);
      }
      for(var i = 0; i < $scope.workable.length; i ++) {
        $scope.obj[$scope.workable[i]] = data[i].beliefs;
      }
    }).catch(function(err) {
      console.log(err);
    })
  };

  $scope.getAll();
  $scope.obj = {};

  $scope.primary = [];

  $scope.questionOneDiv = true;
  $scope.questionTwoDiv = false;
  $scope.sevenBeliefsDiv = false;

  $scope.sevenBeliefs = [];

  $scope.grabResponseAndShowQuestionTwo = function() {
    $scope.questionOneDiv = false;    
    $scope.questionTwoDiv = true;
  }

  $scope.grabResponseAndShowBeliefs = function() {
    $scope.questionTwoDiv = false;   
    $scope.sevenBeliefsDiv = true;
    var index = $scope.choices.indexOf($scope.primary[0]);
    console.log(index);
    $scope.choices.unshift(($scope.choices.splice(index, 1))[0]);

    while ($scope.sevenBeliefs.length < 4) {
      var arr = $scope.obj[$scope.choices[0]];
      var temp = arr[Math.floor(Math.random()*arr.length)];
      if(!$scope.sevenBeliefs.includes(temp)) {
        $scope.sevenBeliefs.push(temp);
      }
    }
    while ($scope.sevenBeliefs.length < 6) {
      var arr = $scope.obj[$scope.choices[1]];
      var temp = arr[Math.floor(Math.random()*arr.length)];
      if(!$scope.sevenBeliefs.includes(temp)) {
        $scope.sevenBeliefs.push(temp);
      }
    }
    while ($scope.sevenBeliefs.length < 7) {
      var arr = $scope.obj[$scope.choices[2]];
      var temp = arr[Math.floor(Math.random()*arr.length)];
      if(!$scope.sevenBeliefs.includes(temp)) {
        console.log($scope.sevenBeliefs)
        $scope.sevenBeliefs.push(temp);
      }
    }
    $scope.sevenBeliefs.forEach(function(belief, index){
      // $scope.beliefText += $"{index + 1}.  {belief}\n";
      $scope.beliefText += (index + 1) + ".  " + belief + "\r\n";

    });
    console.log("belieftext:", $scope.beliefText);
  };

  $scope.beliefText = '';

  $scope.grabResponseAndAddToSevenBeliefs = function() {
    $scope.sevenBeliefs.push($scope.addedBelief);
  };

  $scope.myCanvas = function() {



    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    var img = document.getElementById("scream");
    // console.log(img.src);
    ctx.drawImage(img,120,50);

    ctx.font = "15px Arial";
    ctx.fillText($scope.sevenBeliefs[0],110,370,280);
    ctx.fillText($scope.sevenBeliefs[1],110,390,280);
    ctx.fillText($scope.sevenBeliefs[2],110,410,280);
    ctx.fillText($scope.sevenBeliefs[3],110,430,280);
    ctx.fillText($scope.sevenBeliefs[4],110,450,280);
    ctx.fillText($scope.sevenBeliefs[5],110,470,280);
    ctx.fillText($scope.sevenBeliefs[6],110,490,280);
  }

});