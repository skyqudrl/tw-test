var Controller = function () {
    this.message = '여기는 my';
}


module.exports = angular
    .module('matWiki.my', [])
    .component('my', {
      controller : Controller,
      template : require('./my.component.html')
    })
    .name;
