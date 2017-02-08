/**
 * jQuery Library provided as Angular Dependency
 * @module jQuery
 */
(function () {
  angular
    .module('jQuery', [])
    .factory('jQuery', jQuery)

  jQuery.$inject = ['$window']

  /**
   * @param {object} $window - Get the $window to get jQuery
   * @constructs jQuery
   */
  function jQuery ($window) {
    return $window.jQuery
  }
})()
