var Controller = function () {
    this.message = '여기는 search';
}


module.exports = angular
    .module('matWiki.search', [])
    .component('search', {
      controller : Controller,
      template : require('./search.component.html')
    })
    .name;
