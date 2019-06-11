angular
    .module('appRoutes', ["ui.router"])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state({
            name: 'home',
            url: '/',
            templateUrl: 'public/components/templates/home.html',

        })
        .state({
            name: 'lista',
            url: '/lista',
            templateUrl: 'public/components/templates/lista.html',

        })
        .state({
            name: 'cademp',
            url: '/cademp',
            templateUrl: 'public/components/templates/cademp.html',

        });


    $urlRouterProvider.otherwise('/');
}]);
