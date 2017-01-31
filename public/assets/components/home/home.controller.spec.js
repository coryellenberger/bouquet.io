describe('HomeController', function () {
  beforeEach(module('bouquet'))

  var $controller

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_
  }))

  it('should have  and return param passed', function () {
    var controller = $controller('HomeController', {})

    expect(controller.init).toBeDefined()
    controller.init()
  })
})
