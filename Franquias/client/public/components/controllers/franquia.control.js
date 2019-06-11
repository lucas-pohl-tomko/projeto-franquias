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

    // .controller('CadEmpregadoController', function ($scope, $http) {

    //     $scope.loja_id = null;

    //     $scope.numero_telefone = null;
        
    //     $scope.nome = null;
        
    //     $scope.sobrenome = null;
        
    //     $scope.data_contrato = null;

        
    //     $scope.postdata = function (loja_id, numero_telefone, nome, sobrenome, data_contrato) {
    
    //         var data = {
    //         "loja_id"   : loja_id,

    //         "numero_telefone": numero_telefone,
            
    //         "nome": nome,
            
    //         "sobrenome": sobrenome,

    //         "data_contrato": data_contrato
            
    //         };
    
    //         //Call the services

    //         $http.put('http://127.0.0.1:8000/empregados/', JSON.stringify(data)).then(function (response) {
            
    //         if (response.data)
            
    //         $scope.msg = "Post Data Submitted Successfully!";
            
    //         }, function (response) {
            
    //         $scope.msg = "Service not Exists";
            
    //         $scope.statusval = response.status;
            
    //         $scope.statustext = response.statusText;
            
    //         $scope.headers = response.headers();
            
    //         });
    //     };
    // })

    // .controller('CadastroController', function($scope, Franquia, Loja, Empregado) {
    //     Empregado.query().$promise.then(function(numero_telefone,nome,sobrenome,data_contrato) {
    //         $scope.numero_telefone = null;
    //         $scope.

    //     });
    // }

    .controller('BlaController', ['$scope', function($scope) {
        $scope.message = "Funciona pora ikkkkkkkkk";
    }]);
