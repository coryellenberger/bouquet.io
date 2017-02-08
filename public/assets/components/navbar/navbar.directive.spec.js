describe('navBar', function () {
  beforeEach(module('bouquet'))
  beforeEach(module('templates'))

  var compile
  var scope
  var directiveElem
  var $body
  var $
  var VISIBLE_CLASS = 'is-menu-visible'
  var clickMockEvent
  var keydownMockEvent

  beforeEach(inject(function (_$compile_, _$rootScope_, _$document_, _jQuery_) {
    compile = _$compile_
    scope = _$rootScope_.$new()
    $ = _jQuery_
    $body = $(_$document_[0].body)

    directiveElem = getCompiledElement()

    function getCompiledElement () {
      var element = angular.element('<nav-bar></nav-bar>')
      var compiledElement = compile(element)(scope)
      scope.$digest()
      return compiledElement
    }
  }))

  beforeEach(function () {
    clickMockEvent = $.Event('click')
    spyOn(clickMockEvent, 'stopPropagation')
    spyOn(clickMockEvent, 'preventDefault')
    keydownMockEvent = $.Event('keydown')
  })

  afterEach(function (done) {
    $body.find('#menu').remove()
    done()
  })

  it('should have the menu appended to the body', function () {
    expect($body.find('#menu').length).toEqual(1)
    expect(directiveElem.find('#menu').length).toEqual(0)
  })

  describe('should add class is-menu-visible to body', function () {
    afterEach(function (done) {
      $body.removeClass(VISIBLE_CLASS)
      done()
    })

    it('when menu is clicked', function () {
      directiveElem.find('a[href="#menu"]').triggerHandler(clickMockEvent)
      expect($body.hasClass(VISIBLE_CLASS)).toBe(true)
      expect(clickMockEvent.stopPropagation).toHaveBeenCalled()
      expect(clickMockEvent.preventDefault).toHaveBeenCalled()
    })
  })

  describe('should remove class is-menu-visible from body', function () {
    beforeEach(function (done) {
      $body.addClass(VISIBLE_CLASS)
      done()
    })

    it('when any anchor:not(.close) in the menu is clicked: will NOT stopPropagation and preventDefault', function () {
      $body.find('a:not(.close)').triggerHandler(clickMockEvent)
      expect($body.hasClass(VISIBLE_CLASS)).toBe(false)
      expect(clickMockEvent.stopPropagation).not.toHaveBeenCalled()
      expect(clickMockEvent.preventDefault).not.toHaveBeenCalled()
    })

    it('when .close in the menu is clicked: will stopPropagation and preventDefault', function () {
      $body.find('.close').triggerHandler(clickMockEvent)
      expect($body.hasClass(VISIBLE_CLASS)).toBe(false)
      expect(clickMockEvent.stopPropagation).toHaveBeenCalled()
      expect(clickMockEvent.preventDefault).toHaveBeenCalled()
    })

    it('when the body is clicked', function () {
      $body.triggerHandler('click')
      expect($body.hasClass(VISIBLE_CLASS)).toBe(false)
    })

    it('when escape key (27) is keydown on body', function () {
      keydownMockEvent.keyCode = 27
      $body.triggerHandler(keydownMockEvent)
      expect($body.hasClass(VISIBLE_CLASS)).toBe(false)
    })
  })

  it('should not remove class is-menu-visible when non-escape key is keydown on body', function () {
    $body.addClass(VISIBLE_CLASS)
    keydownMockEvent.keyCode = 12
    $body.triggerHandler(keydownMockEvent)
    expect($body.hasClass(VISIBLE_CLASS)).toBe(true)

    keydownMockEvent.keyCode = 32
    $body.triggerHandler(keydownMockEvent)
    expect($body.hasClass(VISIBLE_CLASS)).toBe(true)

    keydownMockEvent.keyCode = 1
    $body.triggerHandler(keydownMockEvent)
    expect($body.hasClass(VISIBLE_CLASS)).toBe(true)
  })
})
