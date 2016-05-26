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
        'times.tabletop'

    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/main', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/results', {
                templateUrl: 'views/results.html',
                controller: 'ResultsCtrl',
                controllerAs: 'results'
            })
            .otherwise({
                redirectTo: '/results'
            });
    })
    .config(function(TabletopProvider) {
        TabletopProvider.setTabletopOptions({
            key: 'https://docs.google.com/spreadsheets/d/1Je_PAYGueRsHhJGNDdGQexggBJ2vsK6RmRnwQAlK3ZA/pubhtml',
            simpleSheet: false
        });
    });
