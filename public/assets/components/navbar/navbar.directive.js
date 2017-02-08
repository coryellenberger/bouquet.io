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

      $menu.on('click', 'a', function () {
        hide()
      })
      .on('click', '.close', function (event) {
        event.stopPropagation()
        event.preventDefault()
        hide()
      })

      // on Menu click event
      $body.on('click', 'a[href="#menu"]', function (event) {
        event.stopPropagation()
        event.preventDefault()
        show()
      })
      // on Body click to hide menu
      .on('click', function (event) {
        // Hide.
        hide()
      })
      // on escape key to hide menu
      .on('keydown', function (event) {
        // Hide on escape.
        if (event.keyCode === 27) {
          hide()
        }
      })
    }
  }
})()
