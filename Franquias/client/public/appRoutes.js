angular
    .module('appRoutes', ["ngRoute"])
    .config(function($routeProvider) {

    $routeProvider
        .when('/',{
            resolve: {
                "check": function($location, $rootScope){
                        $rootScope.admin = false;
                        $rootScope.loggedIn = false;
                        sessionStorage.clear();

                },
            },

            templateUrl: 'public/components/templates/login.html',

        })
        .when('/home',{

            resolve: {
                "check": function($location, $rootScope){
                    $rootScope.admin = sessionStorage.getItem("admin");
                    $rootScope.loggedIn = sessionStorage.getItem("loggedIn");

                    if(!$rootScope.loggedIn){
                        $location.path('/');
                    }
                },
            },

            templateUrl: 'public/components/templates/home.html',

        })
        .when('/lista',{
            resolve: {
                
                "check": function($location, $rootScope){
                    $rootScope.loggedIn = sessionStorage.getItem("loggedIn");
                    $rootScope.admin = sessionStorage.getItem("admin");

                    if(!$rootScope.loggedIn){
                        $location.path('/');
                    }
                },

            },
            templateUrl: 'public/components/templates/lista.html',
        })
        .when('/minhasfranquias',{
            resolve: {
                
                "check": function($location, $rootScope){

                    $rootScope.loggedIn = sessionStorage.getItem("loggedIn");
                    $rootScope.admin = sessionStorage.getItem("admin");
                    // alert(sessionStorage.getItem("userId"));
                    // alert(sessionStorage.getItem("franq_us"));
                    
                    // var franquias_us = JSON.parse(sessionStorage.getItem("franq_us"));
                    // var franquias = JSON.parse(sessionStorage.getItem("franquias"));
                    // var franquias_do_usuario = [];

                    // franquias_us.forEach(function(x){
                    //     franquias.forEach(function(y){
                    //         if(x.usuario_id == sessionStorage.getItem("userId")){
                    
                    //             if(y.id == x.franquia_id){
                    //                 franquias_do_usuario.push(y.nome);
                    //             }
                    //         }
                    //     })
                    // });

                    // sessionStorage.setItem("listaFranquias", franquias_do_usuario);
                    if(!$rootScope.loggedIn){
                        $location.path('/');
                    }
                    
                },

            },
            templateUrl: 'public/components/templates/minhasFranquias.html',
        })
        .when('/cademp',{
            resolve: {
                "check": function($location, $rootScope){
                    $rootScope.loggedIn = sessionStorage.getItem("loggedIn");
                    $rootScope.admin = sessionStorage.getItem("admin");

                    if(!$rootScope.loggedIn){
                        $location.path('/');
                    }
                },
            },
            templateUrl: 'public/components/templates/cademp.html',
        })
        .when('/cadloja',{
            resolve: {
                "check": function($location, $rootScope){
                    $rootScope.loggedIn = sessionStorage.getItem("loggedIn");
                    $rootScope.admin = sessionStorage.getItem("admin");

                    if(!$rootScope.loggedIn){
                        $location.path('/');
                    }
                },
            },
            templateUrl: 'public/components/templates/cadloja.html',
            
        })
        .when('/cadfranq',{
            resolve: {
                "check": function($location, $rootScope){
                    $rootScope.loggedIn = sessionStorage.getItem("loggedIn");
                    $rootScope.admin = sessionStorage.getItem("admin");

                    if(!$rootScope.loggedIn){
                        $location.path('/');
                    }
                },
            },
            templateUrl: 'public/components/templates/cadfranq.html',
            
        })
        .when('/caduser',{

            resolve: {
                "check": function($location, $rootScope){
                    $rootScope.loggedIn = sessionStorage.getItem("loggedIn");
                    $rootScope.admin = sessionStorage.getItem("admin");

                    if(!$rootScope.loggedIn){
                        $location.path('/');
                    }
                },
            },
            templateUrl: 'public/components/templates/caduser.html',
            
        });

});
