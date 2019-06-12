angular
    .module('appRoutes', ["ngRoute"])
    .config(function($routeProvider) {

    $routeProvider
        .when('/',{
            resolve: {
                "check": function($location, $rootScope){

                        $rootScope.loggedIn = false;

                },
            },

            templateUrl: 'public/components/templates/login.html',

        })
        .when('/home',{

            resolve: {
                "check": function($location, $rootScope){
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
                    if(!$rootScope.loggedIn){
                        $location.path('/');
                    }
                },

            },
            templateUrl: 'public/components/templates/lista.html',
        })
        .when('/cademp',{
            resolve: {
                "check": function($location, $rootScope){
                    if(!$rootScope.loggedIn){
                        $location.path('/');
                    }
                },
            templateUrl: 'public/components/templates/cademp.html',
            }
        });

});
