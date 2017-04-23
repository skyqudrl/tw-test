
module.exports = function ($stateProvider, $urlRouterProvider) {


  $urlRouterProvider.otherwise("/");

  $stateProvider
  .state('main', {
    url : '/',
    template : '<index></index>'
  })
  .state('around', {
    url : "/around",
    templateR : '<around></around>',
  })
  .state('search', {
    url : "/search",
    template : '<search></search>',
  })
  .state('create', {
    url : "/create",
    template : '<create></create>',
  })
  .state('my', {
    url : "/my",
    template : '<my></my>',
  });
}
