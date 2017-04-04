angular.module('app.categories', ['app.checklist-model'])

.controller('categoriesController', function($http, $scope, Categories) {
  $scope.data;
  $scope.fontFamilies;
  $scope.choices = [];
  $scope.workable = [];
// $scope is the intermediary between what the user sees and the
// factory. $scope methods grab from the factory and display it
// via html

  $scope.getAll = function() {
    Categories.getCategories().then(function(data){
      $scope.data = data;
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

  $scope.getFonts = function() {
    Categories.getFontFams().then(function(result){
      $scope.fontFamilies = result;
    })
    // console.log($scope.fontFamilies);
  }

  $scope.getFonts();
  console.log("Workable:", $scope.workable);

  $scope.getAll();
  $scope.obj = {};

  $scope.primary = [];

  $scope.questionTwoDiv = false;
  $scope.sevenBeliefsDiv = false;

  $scope.sevenBeliefs = [];

  $scope.grabResponseAndShowQuestionTwo = function() {
    $scope.questionTwoDiv = true;
  }

  $scope.sevenBeliefsObjects = [

  {
    saying: "This is the first one"
  },
  {
    saying: "This is the second one"
  },
  {
    saying: "This is the third one"
  }

  ];

  console.log("Obj: ", $scope.obj);
  console.log("sevenBeliefs: ", $scope.sevenBeliefs);

  $scope.grabResponseAndShowBeliefs = function() {
    $scope.sevenBeliefsDiv = true;
    var index = $scope.choices.indexOf($scope.primary[0]);
    console.log(index);
    $scope.choices.unshift(($scope.choices.splice(index, 1))[0]);




    for(var i = 0; i < $scope.sevenBeliefs.length; i ++) {
      $scope.sevenBeliefsObjects.push({saying: $scope.sevenBeliefs[i]});
    }

    console.log($scope.sevenBeliefsObjects);





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
        $scope.sevenBeliefs.push(temp);
      }
    }


  };

  $scope.NametagConfig = {
    NametagLines: [
      {
        Label: 'Line 1',
        Font: 'Josefin Sans'
      },
      {
        Label: 'Line 2',
        Font: 'IM Fell Great Primer'
      }
    ]
  };

  init();
  function init(){
    Categories.getFontFams().then(function(result){
      $scope.fontFamilies = result;
    })
  }

  $scope.selectFont = function(line, index) {
    console.log(line)
    console.log(index)

    angular.forEach($scope.fontFamilies, function (font) {
      if (font.family == line.Font) {
        var fontValue = font.value;
        var fontName = font.family;

        if (fontValue === 'default') {
          document.getElementById('LineStyle' + index).style.fontFamily = 'inherit';
        } else {
          document.getElementById('LineStyle' + index).style.fontFamily = fontName;
          replaceStyle('https://fonts.googleapis.com/css?family=' + fontValue, index);
        }
      }
    });
  }

  function replaceStyle(url, index) {
    if (!document.getElementById('styleTag' + index)) {
      var styleTag = document.createElement('link');
      styleTag.rel = 'stylesheet';
      styleTag.id = 'styleTag' + index;
      styleTag.type = 'text/css';
      document.getElementsByTagName('head')[0].appendChild(styleTag);
      replaceStyle(url, index);
    }
    document.getElementById('styleTag' + index).href = url;
  }



  // $scope.check = $scope.choices.length;

  // $scope.checkChanged = function(item){
  //   if(item) $scope.checked++;
  //   else $scope.checked--;
  // }

  // $scope.limit = 3;
  // var item = items[Math.floor(Math.random()*items.length)];


});