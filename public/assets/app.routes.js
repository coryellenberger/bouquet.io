/**
 * Configure the Routes for this application
 * @module RouteConfig
 */
(function () {
  angular
    .module('bouquet')
    .config(RouteConfig)

  RouteConfig.$inject = ['$routeProvider', '$locationProvider']

  /**
   * Configure the Routes for Bouquet.io
   * @param {object} $routeProvider - Used for configuring routes.
   * @param {object} $locationProvider - Use the $locationProvider to configure how the application deep linking paths are stored.
   * @constructs RouteConfig
   */
  function RouteConfig ($routeProvider, $locationProvider) {
    // configure to use hash prefix /#/
    $locationProvider.hashPrefix('')
    // setup routes
    $routeProvider

    .when('/', {
      templateUrl: 'assets/components/home/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    })

    .when('/generic', {
      templateUrl: 'assets/components/generic/generic.html'
    })

    .when('/elements', {
      templateUrl: 'assets/components/elements/elements.html'
    })

    .otherwise('/')
  }
})()
