var service = angular.module('weatherApp.services', []);

service.factory('Weather', ['$http', 'Config', function($http, Config){
 var factory = [];
 var promise;

factory.cityByGeo = function(lat, lon, type){
  promise = $http({
    method: 'GET',
    cache: true ,
    params: {'APPID': Config.apiKey, 'lat': lat, 'lon': lon},
    url: Config.url[type]
  });
  return promise;
};

return factory;
}]);