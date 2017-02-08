/**
 * Directive that will handle displaying the Nav Menu and hiding
 * @module navBar
 */
(function () {
  angular
    .module('bouquet')
    .directive('navBar', navBar)

  navBar.$inject = ['$document', 'jQuery']

  /**
   * @param {object} $document - The Document element used to get the body
   * @param {object} jQuery - jQuery Library provided as Angular Dependency
   * @constructs navBar
   */
  function navBar ($document, $) {
    var directive = {
      link: link,
      replace: true,
      restrict: 'E',
      scope: {},
      templateUrl: 'assets/components/navbar/navbar.html'
    }
    return directive

    /**
     * Linking up event listeners to DOM elements
     * @param {object} scope - Scope of this directive
     * @returns {object} $element - Nav Menu jQuery element
     * @method link
     */
    function link (scope, $element) {
      var $body = $($document[0].body)
      var $menu = $element.find('#menu')
      $menu.appendTo($body)

      var show = function () {
        $body.addClass('is-menu-visible')
      }

      var hide = function () {
        $body.removeClass('is-menu-visible')
      }
      // on header menu anchor click event: show menu
      // stop propagation of route for show menu
      $element.find('a[href="#menu"]').on('click', function (event) {
        event.stopPropagation()
        event.preventDefault()
        show()
      })
      // on menu item click event: hide menu
      // allow propagation of routes
      $menu.find('a:not(.close)').on('click', function () {
        hide()
      })
      // on menu Close Icon click event: hide menu
      // stop propagation of route for close
      $menu.find('.close').on('click', function (event) {
        event.stopPropagation()
        event.preventDefault()
        hide()
      })
      // on body click event: hide menu
      $body.on('click', function () {
        hide()
      })
      // on body escape keydown event: hide menu
      .on('keydown', function (event) {
        if (event.keyCode === 27) {
          hide()
        }
      })
    }
  }
})()
