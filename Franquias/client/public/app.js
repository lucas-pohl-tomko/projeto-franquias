'use strict';

var franquia = angular.module("franquia", []);

angular
    .module('AplicacaoFranquias', [
        'appRoutes',
        'franquia',
        'ngResource'
    ]);