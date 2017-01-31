/**
 * Lodash Library added to Angular Library
 * @module lodash
 */
(function () {
  angular
    .module('lodash', [])
    .factory('lodash', lodash)

  lodash.$inject = ['$window']

  /**
   * @param {object} $window - Get the $window to get lodash
   * @constructs lodash
   */
  function lodash ($window) {
    return $window._ // Lodash must already be loaded on the page
  }
})()
