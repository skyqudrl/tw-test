'use strict';
var angular = require('angular');
require('angular-ui-router');


angular
  .module('app', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url : 'home',
      templateUrl : 'home/home.html'
    })
    .state('user', {
      url : "user",
      templateUrl : 'user/user.html',
    });
  })
