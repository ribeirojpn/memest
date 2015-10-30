angular.module('memest').controller('MyProfileController',function($scope,$resource,$routeParams){
  var Images = $resource('/api/usr/images');
  var User = $resource('/api/usr/');
  var Image = $resource('/api/image/:id');
  $scope.mensagem = {};
  User.get({},function (user) {
    $scope.user = user;
    getImages(user.login);
  },function (erro) {
    console.log(erro);
  });

 function getImages(login) {
   Images.query({},function (images) {
     $scope.images = images;
     console.log(images);
   },function (erro) {
     console.log(erro);
   });
 }

 $scope.removeImage = function(id){
   Image.remove({id:id},
     function(){
       $scope.mensagem.delete = 'Image removed.';
     },function (erro) {
       $scope.mensagem.erro = 'Erro, try again.';
       console.log(erro);
     }
   );
   getImages($scope.user.login);
 }
});
