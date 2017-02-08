/**
 * [jQuery]{@link https://jquery.com/} Library provided as Angular Dependency
 * @module jQuery
 */
(function () {
  angular
    .module('jQuery', [])
    .factory('jQuery', jQuery)

  jQuery.$inject = ['$window']

  /**
   * @param {object} $window - [$window]{@link https://docs.angularjs.org/api/ng/service/$window} is a reference to the browser's window object
   * @method jQuery
   */
  function jQuery ($window) {
    return $window.jQuery
  }
})()
