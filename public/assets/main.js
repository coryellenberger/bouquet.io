(function ($) {
  $(function () {
    // Touch?
    if (skel.vars.touch) {
      $('body').addClass('is-touch')
    }

    /**

    FORMS

    **/
    var $form = $('form')

    // Auto-resizing textareas.
    $form.find('textarea').each(function () {
      var $this = $(this)
      var $wrapper = $('<div class="textarea-wrapper"></div>')

      $this.wrap($wrapper)
      .attr('rows', 1)
      .css('overflow', 'hidden')
      .css('resize', 'none')
      .on('keydown', function (event) {
        if (event.keyCode === 13 &&	event.ctrlKey) {
          event.preventDefault()
          event.stopPropagation()
          $(this).blur()
        }
      })
      .on('blur focus', function () {
        $this.val($.trim($this.val()))
      })
      .on('input blur focus --init', function () {
        $wrapper.css('height', $this.height())
        $this.css('height', 'auto')
          .css('height', $this.prop('scrollHeight') + 'px')
      })
      .on('keyup', function (event) {
        if (event.keyCode === 9) {
          $this.select()
        }
      })
      .triggerHandler('--init')

      // Fix.
      if (skel.vars.browser === 'ie' || skel.vars.mobile) {
        $this.css('max-height', '10em')
          .css('overflow-y', 'auto')
      }
    })

    // Fix: Placeholder polyfill.
    $form.placeholder()

    /**

    END FORMS

    **/
  })
})(jQuery)
