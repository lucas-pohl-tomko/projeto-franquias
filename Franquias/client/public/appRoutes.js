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
