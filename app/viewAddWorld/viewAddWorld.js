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
        var serverResponded = false;
        this.world = {
            name: '',
            sizeRowsColumns: 0
        };


        this.createWorld = function () {

            console.log('Create world request has been sent.');
            $http.post("http://localhost:8080/world/create", self.world)
                .success(function (response) {
                    console.log(response);
                    self.serverResponded = true;
                    if(response.status === "OK"){
                        self.success = true;

                        document.getElementById("sizeRowsColumns").value ="";
                        document.getElementById("name").value ="";
                    }else {
                        self.success = false;
                    }
                }).error(function (result) {
                console.log(result);

                self.serverResponded = true;
                self.success = false
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