// angular.module('app.fabric', ['fabricAngular'])

// .controller('fabricController', function($scope, FabricLink, FabricRender) {
//   // set link function 
//   FabricLink.setLink(function (canvasInstance) {
//     FabricRender.init(canvasInstance);
//   });
//   // init options 
//   $scope.options = {
//     height: 400,
//     width: 400
//   }
// });














// angular.module('app.fabricpage', [
//   'app.fabric',
//   'app.fabric.utilities',
//   'app.fabric.constants'
// ])

// .controller('ExampleCtrl', ['$scope', 'Fabric', 'FabricConstants', 'Keypress', function($scope, Fabric, FabricConstants, Keypress) {

//   $scope.fabric = {};
//   $scope.FabricConstants = FabricConstants;

//   //
//   // Creating Canvas Objects
//   // ================================================================
//   $scope.addShape = function(path) {
//     $scope.fabric.addShape('http://fabricjs.com/assets/15.svg');
//   };

//   $scope.addImage = function(image) {
//     $scope.fabric.addImage('http://stargate-sg1-solutions.com/blog/wp-content/uploads/2007/08/daniel-season-nine.jpg');
//   };

//   $scope.addImageUpload = function(data) {
//     var obj = angular.fromJson(data);
//     $scope.addImage(obj.filename);
//   };

//   //
//   // Editing Canvas Size
//   // ================================================================
//   $scope.selectCanvas = function() {
//     $scope.canvasCopy = {
//       width: $scope.fabric.canvasOriginalWidth,
//       height: $scope.fabric.canvasOriginalHeight
//     };
//   };

//   $scope.setCanvasSize = function() {
//     $scope.fabric.setCanvasSize($scope.canvasCopy.width, $scope.canvasCopy.height);
//     $scope.fabric.setDirty(true);
//     delete $scope.canvasCopy;
//   };

//   //
//   // Init
//   // ================================================================
//   $scope.init = function() {
//     $scope.fabric = new Fabric({
//       JSONExportProperties: FabricConstants.JSONExportProperties,
//       textDefaults: FabricConstants.textDefaults,
//       shapeDefaults: FabricConstants.shapeDefaults,
//       json: {}
//     });
//   };

//   $scope.$on('canvas:created', $scope.init);

//   Keypress.onSave(function() {
//     $scope.updatePage();
//   });

// }]);



// angular.module('app.fabric', [
//   'app.fabric',
//   'app.fabric.utilities',
//   'app.fabric.constants'
// ])

// .controller('fabricController', ['$scope', '$www', 'Modal', 'Fabric', 'FabricConstants', 'ImagesConstants', 'Keypress', function($scope, $www, Modal, Fabric, FabricConstants, ImagesConstants, Keypress) {

//   $scope.fabric = {};
//   $scope.ImagesConstants = ImagesConstants;
//   $scope.FabricConstants = FabricConstants;

//   //
//   // Creating Canvas Objects
//   // ================================================================
//   $scope.addShape = function(path) {
//     $scope.fabric.addShape('/lib/svg/' + path + '.svg');
//     Modal.close();
//   };

//   $scope.addImage = function(image) {
//     $scope.fabric.addImage('/image?image=' + image + '&size=full');
//     Modal.close();
//   };

//   $scope.addImageUpload = function(data) {
//     var obj = angular.fromJson(data);
//     $scope.addImage(obj.filename);
//     Modal.close();
//   };

//   //
//   // Editing Canvas Size
//   // ================================================================
//   $scope.selectCanvas = function() {
//     $scope.canvasCopy = {
//       width: $scope.fabric.canvasOriginalWidth,
//       height: $scope.fabric.canvasOriginalHeight
//     };
//   };

//   $scope.setCanvasSize = function() {
//     $scope.fabric.setCanvasSize($scope.canvasCopy.width, $scope.canvasCopy.height);
//     $scope.fabric.setDirty(true);
//     Modal.close();
//     delete $scope.canvasCopy;
//   };

//   $scope.updateCanvas = function() {
//     var json = $scope.fabric.getJSON();

//     $www.put('/api/canvas/' + $scope.canvasId, {
//       json: json
//     }).success(function() {
//       $scope.fabric.setDirty(false);
//     });
//   };

//   //
//   // Init
//   // ================================================================
//   $scope.init = function() {
//     $scope.fabric = new Fabric({
//       JSONExportProperties: FabricConstants.JSONExportProperties,
//       textDefaults: FabricConstants.textDefaults,
//       shapeDefaults: FabricConstants.shapeDefaults,
//       json: $scope.main.selectedPage.json
//     });
//   };

//   $scope.$on('canvas:created', $scope.init);

//   Keypress.onSave(function() {
//     $scope.updatePage();
//   });

// }]);
