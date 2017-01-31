describe('lodash', function () {
  beforeEach(module('lodash'))

  var lodash
  var $window

  beforeEach(inject(function (_lodash_, _$window_) {
    lodash = _lodash_
    $window = _$window_
  }))

  it('should return the lodash library from $window', function () {
    expect(lodash).toEqual($window._)
  })
})
