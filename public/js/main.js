angular.module('memest',['ngRoute','ngResource']).config(function($routeProvider){
  $routeProvider.when('/',{
    templateUrl: 'partials/home.html',
    controller: 'HomeController'
  });

  $routeProvider.otherwise({redirectTo:'/'});
});
