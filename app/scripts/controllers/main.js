'use strict';

/**
 * @ngdoc function
 * @name hearkenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hearkenApp
 */
angular.module('hearkenApp')
    .controller('MainCtrl', function($scope, $http) {

        $scope.send = false;




        $scope.resetForm = function() {

            $scope.form = {
                name: '',
                email: '',
                questions: ''
            };
        };

        var sendToZapier = function(question) {
            var date = new Date();

            if (question.name !== '' && question.email !== '' && question.question !== '') {
                console.log(question);


                $http({
                    method: 'GET',
                    url: 'https://zapier.com/hooks/catch/61620/uw2rt6/',
                    params: {
                        'name': question.name,
                        'email': question.email,
                        'question': question.question,
                        'date': date,
                    }
                }).then(function() {
                    $scope.send = true;
                }, function(response) {
                    console.log(response);
                });

            }

        };




        $scope.sendForm = function(question) {

            sendToZapier(question);


        };

        $scope.resetForm();

    });
