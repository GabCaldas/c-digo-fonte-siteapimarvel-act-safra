angular.module('app').config([
  '$stateProvider',
  '$urlRouterProvider',
  '$httpProvider',
  function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'public/home/home.template.html'
      })
      .state('details', {
        url: '/details/:characterId',
        templateUrl: 'public/character-details-container/characterDetails.template.html',
        params: {
          characterId: null
        }
      });
    $urlRouterProvider.otherwise('/home');
  }
]);
