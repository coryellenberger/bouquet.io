/**
 * Configure the Routes for Bouquet.IO
 * @module RouteConfig
 */
(function () {
  angular
    .module('bouquet')
    .config(RouteConfig)

  RouteConfig.$inject = ['$routeProvider', '$locationProvider']

  /**
   * Configure the hash prefix as well as the route paths
   * @listens $routeProvider~route /
   * @listens $routeProvider~route /generic
   * @listens $routeProvider~route /elements
   * @param {object} $routeProvider - Used for configuring routes.
   * @param {object} $locationProvider - Use the $locationProvider to configure how the application deep linking paths are stored.
   * @method RouteConfig
   */
  function RouteConfig ($routeProvider, $locationProvider) {
    // configure to use hash prefix /#/
    $locationProvider.hashPrefix('')
    // setup routes
    $routeProvider

    .when('/', {
      templateUrl: 'assets/components/home/home.html'
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
