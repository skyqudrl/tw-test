'use strict';

var angular = require('angular');
var route = require('./route.js');
require('angular-ui-router');

var aroundComponent = require('./around/around.component');
var mainComponent = require('./main/main.component');
var searchComponent = require('./search/search.component');
var createComponent = require('./create/create.component');
var myComponent = require('./my/my.component');


          angular
              .module('matWiki', ['ui.router', aroundComponent, mainComponent, searchComponent, createComponent, myComponent])
              .config(route)
              .controller('naviCtrl', require('./controller'))


angular.bootstrap(document, ['matWiki'], {
});
