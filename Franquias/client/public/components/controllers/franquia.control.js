franquia
    .controller('FranquiaController', function($scope, Franquia, Loja, Empregado,Franquias_Usuarios,$rootScope) {
        Franquia.query().$promise.then(function(data) {
            $scope.franquias = data;
        });
        Loja.query().$promise.then(function(data) {
            $scope.lojas = data;
        });
        Empregado.query().$promise.then(function(data) {
            $scope.empregados = data;
        });

        Franquias_Usuarios.query().$promise.then(function(data) {
            $scope.franquias_usuarios = data;
        });
    })

    .controller('LoginController', function($scope,$location, Usuario,$rootScope,Franquia,Franquias_Usuarios) {
        
        Usuario.query().$promise.then(function(data) {
            $scope.usuarios = data;

            $scope.submit = function(){
                data.forEach(function(x){
                    if($scope.nomeusuario == x.nome && $scope.senhausuario == x.senha){
                        sessionStorage.setItem("loggedIn", true);
                        sessionStorage.setItem("userId", JSON.stringify(x.id));
                        $rootScope.loggedIn = sessionStorage.getItem("loggedIn");
                        if(x.admin == 1){
                            sessionStorage.setItem("admin", true);
                            $rootScope.admin = sessionStorage.getItem("admin");

                            $location.path('/home')
                        }else{
                            $location.path('/home')
                        }
                    }
                })
                

            }
        }
    )
        Franquias_Usuarios.query().$promise.then(function(data) {
            $scope.franquias_usuarios = data;
            sessionStorage.setItem("franq_us", JSON.stringify(data));
        })
        Franquia.query().$promise.then(function(data) {
            $scope.franquias = data;
            sessionStorage.setItem("franquias", JSON.stringify(data));
        });
    })
    .controller('Franquia_UsuariosController', function($scope, Franquia, Loja, Empregado,Usuario,Franquias_Usuarios,$rootScope) {
        Usuario.query().$promise.then(function(data) {
            $scope.usuarios = data;
        })
        Franquias_Usuarios.query().$promise.then(function(data) {
            $scope.franquias_usuarios = data;
            sessionStorage.setItem("franq_us", JSON.stringify(data));
            $rootScope.franquias_usuarios = $scope.franquias_usuarios;

        })
        Franquia.query().$promise.then(function(data) {
            $scope.franquias = data;
            sessionStorage.setItem("franquias", JSON.stringify(data));
        });
        $scope.userId=sessionStorage.getItem("userId");

    })
    
                    

                // });
                // var x;
                // for (x in data) {
                //     if($scope.nomeusuario == x.nome){
                //         $location.path('/home');
                //     }
                // }

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

