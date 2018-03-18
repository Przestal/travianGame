'use strict';

angular.module('myApp.viewWorldPreview', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/viewWorldPreview', {
            templateUrl: 'viewWorldPreview/viewWorldPreview.html',
            controller: 'ViewWorldPreviewCtrl'
        });
    }])

    .controller('ViewWorldPreviewCtrl', ['$http', function ($http) {

        this.colony = {
            userId: 1,
            fieldId: 1,
            colonyName: ''
        };

        this.createColony = function () {
            console.log('clicked creating colony!');
            $http.post('http://localhost:8080/colony/create', self.colony)
                .success(function (result) {
                    console.log(result)
                    if (result.status != 'OK') {
                        self.error = 'Error adding colony!';
                    }
                }).error(function (result) {
                console.log(result)
            });
        }

    }]);
