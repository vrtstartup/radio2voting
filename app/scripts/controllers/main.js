'use strict';

/**
 * @ngdoc function
 * @name hearkenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hearkenApp
 */
angular.module('hearkenApp')
    .controller('MainCtrl', function($scope, $firebaseArray, $routeParams) {


        $scope.regio = $routeParams.regio;
        $scope.send = false;

        var list = $firebaseArray(new Firebase('https://radio2form.firebaseio.com/questions'));

        $scope.addQuestion = function(question) {
            question.regio = $routeParams.regio;
            question.votes = 0;
            question.shortlist = false;

            list.$add(question).then(function(ref) {
                var id = ref.key();
                console.log("added record with id " + id);
                list.$indexFor(id); // returns location in the array
                $scope.send = true;
            });

        };




    });
