'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$http', function ($http) {
        console.log("Clicked");
        this.requestColony = function () {
            $http.get('http://localhost:8080/colony/get/1')
                .success(function (data) {
                    console.log(data);
                })
                .error(function (error) {
                    console.log(error)
                });

        }
    }]);