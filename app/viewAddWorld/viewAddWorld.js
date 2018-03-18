'use strict';

angular.module('myApp.viewAddWorld', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/viewAddWorld', {
            templateUrl: 'viewAddWorld/viewAddWorld.html',
            controller: 'ViewAddWorldCtrl'
        });
    }])


    .controller('ViewAddWorldCtrl', ['$http', function ($http) {
        self = this;
        this.world = {
            name: '',
            sizeRowsColumns: 0
        };


        this.createWorld = function () {

            console.log('clicked');
            $http.post("http://localhost:8080/world/create", self.world)
                .success(function (odpowiedz) {
                    console.log(odpowiedz);
                }).error(function (result) {
                console.log(result);
            });
        }

        /*
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
        */
    }]);