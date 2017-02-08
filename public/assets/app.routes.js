/**
 * Configure the Routes for Bouquet.IO
 * @module RouteConfig
 */
(function () {
  angular
    .module('bouquet')
    .config(RouteConfig)

  RouteConfig.$inject = ['$locationProvider', '$routeProvider']

  /**
   * Configure the hash prefix as well as the route paths
   * @listens $routeProvider~[route]{@link http://www.w3schools.com/angular/angular_routing.asp} /
   * @listens $routeProvider~[route]{@link http://www.w3schools.com/angular/angular_routing.asp} /generic
   * @listens $routeProvider~[route]{@link http://www.w3schools.com/angular/angular_routing.asp} /elements
   * @param {object} $locationProvider - [$locationProvider]{@link https://docs.angularjs.org/api/ng/provider/$locationProvider} is used to configure how the application deep linking paths are stored
   * @param {object} $routeProvider - [$routeProvider]{@link https://docs.angularjs.org/api/ngRoute/provider/$routeProvider} is used for configuring routes
   * @method RouteConfig
   */
  function RouteConfig ($locationProvider, $routeProvider) {
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
