var Controller = function () {
    this.message = '여기는 main-content';
}


module.exports = angular
    .module('matWiki.main', [])
    .component('index', {
      controller : Controller,
      template : require('./main.component.html')
    })
    .name;
