var aroundController = function () {
    this.message = '여기는 around';
}

module.exports = angular
    .module('matWiki.around', [])
    .component('around', {
      controller : aroundController,
      template : require('./around.component.html')
    })
    .name;
