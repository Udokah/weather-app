
var controller = angular.module('weatherApp.controllers', []);

controller.controller('MainController', ['$scope', 'Weather', 'LxProgressService', 
  function($scope, Weather, LxProgressService){

  $scope.showResult = false;

  $scope.showWeather = function(type){
    $scope.place = $scope.googlePlace.getPlace();
    var lat = $scope.place.geometry.location.A;
    var lon = $scope.place.geometry.location.F;
    var promise = Weather.cityByGeo(lat, lon, type);
    (type !== 'today') ? $scope.date = 'Last Week' : $scope.date = 'Today';
    promise.success(function(data, status, headers, config){
      LxProgressService.linear.hide();
      $scope.showResult = true;
      $scope.weather = data;
      var kTemp = parseInt($scope.weather.main.temp);
      $scope.temperature = parseFloat(kTemp - 273.15).toFixed(2);
      $scope.weather.description = data.weather[0].description;
    });
  };

  $scope.doSearch = function(){
    LxProgressService.linear.show('#5fa2db', '#progress');
    $scope.showWeather('today');
  };

  // $scope.$watch('toogleSwitch', function(on){
  //   try {
  //     on ? $scope.showWeather('past') : $scope.showWeather('today');
  //   } catch(e){
  //     console.log(e);
  //   }
  // });

}]);