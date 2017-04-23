var aroundController = function ($http) {
    $http.get('http://naver.com');
    this.message = '여기는 around';
    this.arr = [1, 2, 3];
}

module.exports = angular
    .module('matWiki.around', [])
    .component('around', {
      controller : aroundController,
      template : require('./around.component.html')
    })
    .name;
