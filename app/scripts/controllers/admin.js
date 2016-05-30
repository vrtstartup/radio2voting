'use strict';

/**
 * @ngdoc function
 * @name hearkenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hearkenApp
 */
angular.module('hearkenApp')
    .controller('AdminCtrl', function($scope, $firebaseArray, $routeParams, localStorageService) {


  localStorageService.clearAll();


        var list = $firebaseArray(new Firebase('https://radio2form.firebaseio.com/questions'));
        $scope.list = list;

        $scope.regios = [{
            'name': 'Oost Vlaanderen',
            'value': 'oost vlaanderen'
        }, {
            'name': 'Antwerpen',
            'value': 'antwerpen'
        }, {
            'name': 'alles',
            'value': undefined
        }];

        // $scope.resetFilter = function(){
        //     $scope.re
        // }
    });
