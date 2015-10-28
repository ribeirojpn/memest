angular.module('memest').controller('HomeController',function ($scope,$resource,$routeParams) {
  $scope.message = {text: 'Controller - HomeController! Lista de Imagens adicionadas no site recentemente(formato de feed do pinterest)'};
});
