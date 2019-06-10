angular
    .module('appRoutes', ["ui.router"])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state({
            name: 'franquia',
            url: '/',
            templateUrl: 'public/components/templates/franquia.html',

        })
        .state({
            name: 'bla',
            url: '/opa',
            templateUrl: 'public/components/templates/bla.html',

        });


    $urlRouterProvider.otherwise('/');
}]);
