'use strict';

var app = angular.module('weatherApp',[
  'ui.router',
  'lumx',
  'weatherApp.config',
  'weatherApp.controllers',
  'weatherApp.directives',
  'weatherApp.services'
  ]);


app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('/', {
      url: '/',
      templateUrl: 'app/js/views/main.html',
      controller: 'MainController'
    });

});