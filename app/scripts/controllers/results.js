'use strict';

/**
 * @ngdoc function
 * @name hearkenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hearkenApp
 */
angular.module('hearkenApp')
    .controller('ResultsCtrl', function($scope, $http, Tabletop) {

        $scope.send = false;

        Tabletop.then(function(result) {
            $scope.questions = result[0].Questions.elements;
        });



        var sendToZapier = function(question, value) {
            var date = new Date();

            if (question.name !== '' && question.email !== '' && question.question !== '') {

                $http({
                    method: 'GET',
                    url: 'https://zapier.com/hooks/catch/61620/uwtcba/',
                    params: {
                        'question': question,
                        'value': value
                    }
                }).then(function() {
                    $scope.send = true;
                }, function(response) {
                    console.log(response);
                });

            }

        };

        $scope.selectQuestion = function(question, value){
            value++;
            sendToZapier(question, value);
        };

    });
