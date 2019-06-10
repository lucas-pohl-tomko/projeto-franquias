franquia
    .controller('FranquiaController', function($scope, Franquia, Loja, Empregado) {
        Franquia.query().$promise.then(function(data) {
            $scope.franquias = data;
        });
        Loja.query().$promise.then(function(data) {
            $scope.lojas = data;
        });
        Empregado.query().$promise.then(function(data) {
            $scope.empregados = data;
        })
    })


    .controller('BlaController', ['$scope', function($scope) {
        $scope.message = "Funciona pora ikkkkkkkkk";
    }]);
