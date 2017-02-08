/**
 * Bouquet.IO Application
 * @prop {object} ngRoute - The [ngRoute]{@link https://docs.angularjs.org/api/ngRoute} module provides routing and deeplinking services and directives for AngularJS apps
 * @prop {object} ngResource - The [ngResource]{@link https://docs.angularjs.org/api/ngResource} module provides interaction support with RESTful services
 * @prop {object} jQuery - [jQuery]{@link globals/jquery.factory.js} Library provided as Angular Dependency
 * @prop {object} lodash - [Lodash]{@link globals/lodash.factory.js} Library provided as Angular Dependency
 * @module bouquet
 */
(function () {
  angular
    .module('bouquet', [
      'ngRoute',
      'ngResource',
      'jQuery',
      'lodash'
    ])
})()
