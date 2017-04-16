var Controller = function () {
    this.message = '여기는 create';
}


module.exports = angular
    .module('matWiki.create', [])
    .component('create', {
      controller : Controller,
      template : require('./create.component.html')
    })
    .name;
