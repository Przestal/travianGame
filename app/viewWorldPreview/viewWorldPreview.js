'use strict';

angular.module('myApp.viewWorldPreview', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/viewWorldPreview', {
            templateUrl: 'viewWorldPreview/viewWorldPreview.html',
            controller: 'ViewWorldPreviewCtrl'
        });
    }])

    .controller('ViewWorldPreviewCtrl', ['$http', function ($http) {
        self = this;
        this.worlds = [];

        this.colony = {
            userId: 1,
            fieldId: 1,
            colonyName: ''
        };

        this.retrieveAllWorlds = function () {
            console.log("Retrieveing all worlds.");
            $http.get('http://localhost:8080/world/getAllWorld')
                .success(function (response) {
                    console.log(response);

                    self.worlds = [];
                    for (var worldId in response.body) {

                        // upcnij elemtnty do listy
                        // console.log(response.body[world]);
                        self.worlds.push(response.body[worldId]);
                    }
                    // self.words = response.body;
                })
                .error(function (errResponse) {
                    console.log(errResponse);
                });


        };

        this.retrieveAllWorlds();


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
