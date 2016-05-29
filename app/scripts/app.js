'use strict';

/**
 * @ngdoc overview
 * @name hearkenApp
 * @description
 * # hearkenApp
 *
 * Main module of the application.
 */
angular
    .module('hearkenApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngMessages',
        'ngMaterial',
        'firebase',
        'LocalStorageModule'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/main/:regio', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })

        .when('/results/:regio', {
                templateUrl: 'views/results.html',
                controller: 'ResultsCtrl',
                controllerAs: 'results'
            })
            .when('/admin', {
                templateUrl: 'views/admin.html',
                controller: 'AdminCtrl',
                controllerAs: 'admin'
            })
            .otherwise({
                redirectTo: '/main/limburg'
            });
    })
    .config(function(localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('radio2voting');
    });
