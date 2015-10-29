angular.module('memest',['ngRoute','ngResource','akoenig.deckgrid']).config(function($routeProvider){
  $routeProvider.when('/',{
    templateUrl: 'partials/home.html',
    controller: 'HomeController'
  });

  $routeProvider.when('/add-image',{
    templateUrl: 'partials/add-image.html',
    controller: 'AddImageController'
  });

  $routeProvider.when('/:login',{
    templateUrl: 'partials/profile.html',
    controller: 'ProfileController'
  });

  $routeProvider.otherwise({redirectTo:'/'});
});
