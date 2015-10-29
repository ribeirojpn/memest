angular.module('memest').controller('HomeController',function ($scope,$resource){
  var Images = $resource('/api/images');

  Images.query(function (images) {
    $scope.images = images;

  },function (erro) {
    console.log(erro);
  });

});
