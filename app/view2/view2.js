'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$http',function($http) {
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
  })
}
}]);