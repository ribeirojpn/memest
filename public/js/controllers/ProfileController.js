angular.module('memest').controller('ProfileController',function($scope,$resource,$routeParams){
  var Images = $resource('/api/user/:login/images');
  var User = $resource('/api/user/:login');


  User.get({'login': $routeParams.login},function (user) {
    $scope.user = user;
    getImages(user.login);
  },function (erro) {
    console.log(erro);
  });

  function getImages(login) {
    Images.query({'login': login},function (images) {
      $scope.images = images;
    },function (erro) {
      console.log(erro);
    }
  );
 }
});
