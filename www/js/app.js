angular.module('dropickApp', ['ionic'])

  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('splash', {
        url: "/splash",
        templateUrl: "splash.html",
        controller: "SplashCtrl"
      })

      .state('main', {
        url: "/main",
        abstract: true,
        templateUrl: "main.html"
      })

      .state('main.login', {
        url: "/login",
        views: {
          'mainContent' :{
            templateUrl: "login.html",
            controller: "LoginCtrl"
          }
        }
      })

      .state('main.home', {
        url: "/home",
        views: {
          'mainContent' :{
            templateUrl: "home.html",
            controller: "HomeCtrl"
          }
        }
      });
    
    $urlRouterProvider.otherwise("/main/login");
  })

  .controller('MainCtrl', function($scope) {
  })

  .controller('SplashCtrl', function($scope) {
  })

  .controller('LoginCtrl', function($scope) {

    $scope.leftButtons = [{
      type: 'button-icon button-clear ion-navicon dp-custom-menu-nav-bar-btn',
      tap: function(e) {
        console.log("click menu");
      }
    }];

  })

  .controller('HomeCtrl', function($scope) {
  });



