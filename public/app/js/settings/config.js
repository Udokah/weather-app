var config = angular.module('weatherApp.config', []);

config.factory('Config', [function(){
  var url = 'http://api.openweathermap.org/data/2.5';
  return {
    url: { today: url + '/weather', past: url + '/history' },
    apiKey: 'fcfacb4d8649bc803a29b2fb45519ba7'
  };
}]);