describe('lodash', function () {
  beforeEach(module('lodash'))

  var _
  var $window

  beforeEach(inject(function (_lodash_, _$window_) {
    _ = _lodash_
    $window = _$window_
  }))

  it('should return the lodash library from $window', function () {
    expect(_).toEqual($window._)
  })
})
