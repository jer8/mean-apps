angular.module("myApp",["app.routes","MainController"]),angular.module("app.routes",["ngRoute"]).config(["$routeProvider","$locationProvider",function(o,e){o.when("/",{templateUrl:"app/views/pages/home.html",controller:"mainController",controllerAs:"main"}),e.html5Mode(!0)}]),angular.module("MainController",[]).controller("mainController",function(){var o=this;o.message="Hello sample message"});