angular.module('memest').controller('HomeController',function ($scope,$resource){
  var Images = $resource('/api/images');

  Images.query(function (images) {
    $scope.images = images;
    console.log(images);

  },function (erro) {
    console.log(erro);
  });

});
