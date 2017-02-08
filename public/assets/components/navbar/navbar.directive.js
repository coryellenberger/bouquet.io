/**
 * Directive that will handle the header menu icon
 * as well as showing/hiding the menu
 * @module navBar
 * @example <nav-bar></nav-bar>
 */
(function () {
  angular
    .module('bouquet')
    .directive('navBar', navBar)

  navBar.$inject = ['$document', 'jQuery']

  /**
   * Provide Angular dependencies to the link method and configure the directive properties
   * @prop {true} replace - replace attached element
   * @prop {E} restrict - Element only
   * @prop {{}} scope - isolated
   * @prop {navbar.html} templateUrl - path to template
   * @param {object} $document - The Document element provided by Angular
   * @param {object} jQuery - jQuery Library provided as Angular Dependency
   * @method navBar
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
     * Linking up event listeners to the header, menu and body to hide/show the Menu;
     * appending the Menu to the body for visibility
     * @listens $element~click a[href="#menu"]
     * @listens $menu~click a:not(.close)
     * @listens $menu~click .close
     * @listens $body~click
     * @listens $body~keydown
     * @param {object} scope - Scope of this directive
     * @param {object} $element - NavBar jQuery element
     * @method link
     */
    function link (scope, $element) {
      var $body = $($document[0].body)
      var $menu = $element.find('#menu')
      $menu.appendTo($body)
      // helper method to show menu
      var show = function () {
        $body.addClass('is-menu-visible')
      }
      // helper method to hide menu
      var hide = function () {
        $body.removeClass('is-menu-visible')
      }
      // ELEMENT EVENTS
      // on header menu anchor click event: show menu
      // stop propagation of route for show menu
      $element.find('a[href="#menu"]').on('click', function (event) {
        event.stopPropagation()
        event.preventDefault()
        show()
      })

      // MENU EVENTS
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

      // BODY EVENTS
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
