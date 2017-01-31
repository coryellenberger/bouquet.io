/**
 * Controller to integrate the $scope to View
 * @module HomeController
 */
(function () {
  angular
    .module('bouquet')
    .controller('HomeController', HomeController)

  /**
   * @constructs HomeController
   */
  function HomeController () {
    /** public members **/
    var vm = this
    vm.init = init
    /**
     * Initialize the home page
     * @method init
     */
    function init () {
    }
  }
})()
