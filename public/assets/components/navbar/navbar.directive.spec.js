describe('navBar', function () {
  beforeEach(module('bouquet'))
  beforeEach(module('templates'))

  var compile
  var scope
  var directiveElem
  var $body
  var $

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

  it('should have the menu appended to the body', function () {
    expect($body.find('#menu').length).toEqual(1)
    expect(directiveElem.find('#menu').length).toEqual(0)
  })
})
