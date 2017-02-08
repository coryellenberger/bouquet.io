/**
 * [Lodash]{@link https://lodash.com/} Library provided as Angular Dependency
 * @module lodash
 */
(function () {
  angular
    .module('lodash', [])
    .factory('lodash', lodash)

  lodash.$inject = ['$window']

  /**
   * @param {object} $window - [$window]{@link https://docs.angularjs.org/api/ng/service/$window} is a reference to the browser's window object
   * @method lodash
   */
  function lodash ($window) {
    return $window._
  }
})()
