
var controller = angular.module('weatherApp.controllers', []);

controller.controller('MainController', ['$scope', function($scope){

  $scope.doSearch = function(){
    $scope.place = $scope.googlePlace.getPlace();
    console.log($scope.place);
  };

}]);