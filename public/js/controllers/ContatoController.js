angular.module('contatooh').controller('ContatoController',
  function($scope, $routeParams, Contato) {
  	if($routeParams.contatoId) {
	  	Contato.get({id: $routeParams.contatoId},
	    function(contato) {
		    $scope.contato = contato;
		},
		function(erro) {
		    $scope.mensagem = {
		        texto: 'Não foi possível obter o contato.'
		    };
		    console.log(erro);
		});
	    console.log($routeParams.contatoId);
	}else{
		$scope.contato = new Contato();
	}
	$scope.salva = function() {
		$scope.contato.$save();
	};

});