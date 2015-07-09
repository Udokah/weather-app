
var controller = angular.module('weatherApp.controllers', []);

controller.controller('MainController', ['$scope', function($scope){

  $scope.$watch('search', function(val){
    console.log($scope.search);
  });

}]);