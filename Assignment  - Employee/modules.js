var app = angular.module("myApp", ["ngRoute"]);
    app.config(function ($routeProvider) {
      $routeProvider
        .when("/", {
          templateUrl: "login.html",
          controller: ""
        })
        .when("/emp", {
          templateUrl: "employeelist.html",
          controller : "tab2Ctrl"
        })
        .when("/editdetail", {
            templateUrl: "editdetail.html",
            controller: "tab2Ctrl"
        })
        .when("/cancel", {
          templateUrl: "employeelist.html",
          controller: "tab2Ctrl"
      })
    });