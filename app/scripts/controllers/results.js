'use strict';

/**
 * @ngdoc function
 * @name hearkenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hearkenApp
 */
angular.module('hearkenApp')
    .controller('ResultsCtrl', function($scope, $firebaseArray, $routeParams, localStorageService) {


        var voted = localStorageService.get('voted');

        if (voted === true) {
            $scope.voted = true;
        } else {
            $scope.voted = false;

        }

        $scope.send = false;


        $scope.regio = $routeParams.regio;
        var list = $firebaseArray(new Firebase('https://radio2form.firebaseio.com/questions'));
        $scope.list = list;

        $scope.vote = function(item) {
            console.log('voting');
            item.votes = item.votes + 1;
            $scope.list.$save(item);
            $scope.send = true;
            localStorageService.set('voted', true);

        };

    });
