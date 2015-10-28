angular.module('memest').controller('AddImageController',function($scope,$resource){
  var Image = $resource('/api/images');
  $scope.image = new Image();
  $scope.mensagem = {
    success:'',
    erro:''
  };

  $scope.save = function() {
    $scope.image.$save().then(
      function(){
        $scope.mensagem.success = 'Imagge added!';
        $scope.mensagem.erro = '';
        $scope.image = new Image();
      }
    ).catch(
      function(erro) {
        console.log(erro);
        if (erro.statusText === "Unauthorized") {
          $scope.mensagem.erro = 'Could not add the image: Unauthorized. You must be logged!';
        } else {
          $scope.mensagem.erro = 'Could not add the image. Check if is all right';
        }
        $scope.mensagem.success = '';
      }
    );
  };
});
