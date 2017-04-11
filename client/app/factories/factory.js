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

// .factory('FabricRender', ['fabric', function(fabric) {
//   var canvas;
//   function render() {
//     if(!canvas) {
//       return;
//     }
//   // your render logic with provided canvas instance

//     var total = 100,
//           blobs = new Array(total),
//           myfps = 60,
//           updateTime = 1000 / myfps,
//           mouse_pos = { x: 0, y: 0 },
//           maxx = canvas.width,
//           maxy = canvas.height,
//           msg, startTime, prevTime, ms, frames;

//         canvas.setBackgroundImage('../assets/bkg.jpg');
//         fabric.Image.fromURL('../assets/blob.png', blobLoaded);

//         canvas.on('mouse:move', function(options) {
//           mouse_pos = canvas.getPointer(options.e);
//         });

//         function blobLoaded(img) {
//           for (var i = 0; i < total; i++) {
//             var img = new fabric.Image(img.getElement(), {
//               left: Math.random() * maxx,
//               top: Math.random() * maxy,
//               selectable: false
//             });
//             img.vx = 0;
//             img.vy = 0;
//             canvas.add(img);
//             blobs[i] = img;
//           }

//           msg = new fabric.Text('FPS: 0/' + myfps, {
//             fontFamily: 'Arial',
//             fontSize: 12,
//             fill: 'white',
//             fontWeight: 'bold',
//             left: 50,
//             top: 35,
//             selectable: false
//           });
//           canvas.add(msg);

//           frames = 0;
//           startTime = Date.now(), prevTime = startTime;
//           animate();
//         }

//         function animate() {
//           for (var i = 0; i < total; i++) {
//             var blob = blobs[i];
//             var dx = blob.left - mouse_pos.x;
//             var dy = blob.top - mouse_pos.y;
//             var vx = blob.vx;
//             var vy = blob.vy;

//             if (dx * dx + dy * dy <= 10000) {
//               vx += dx * 0.01;
//               vy += dy * 0.01;
//             }
//             vx *= 0.95;
//             vy *= 0.95;

//             vx += Math.random() - 0.5;
//             vy += Math.random() - 0.5;

//             var x = blob.left += vx;
//             var y = blob.top += vy;

//             if (x < 0 || x > maxx || y < 0 || y > maxy) {
//               var r = Math.atan2(y - maxy / 2, x - maxx / 2);
//               vx = -Math.cos(r);
//               vy = -Math.sin(r);
//             }

//             blob.vx = vx;
//             blob.vy = vy;
//           }

//           var time = Date.now();
//           frames++;

//           if ( time > prevTime + 1000 ) {
//             fps = Math.round( ( frames * 1000 ) / ( time - prevTime ) );
//             prevTime = time;
//             frames = 0;

//             msg.setText("FPS: " + fps + "/" + myfps);
//           }

//           fabric.util.requestAnimFrame(animate, canvas.getElement());
//           canvas.renderAll();
//         }
//       }


  
//   function init(canvasInstance) {
//     canvas = canvasInstance;
//     render();
//   }
//   return {
//     init: init
//     // do some clean up by exporting destroy function
//   }
// }])

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
