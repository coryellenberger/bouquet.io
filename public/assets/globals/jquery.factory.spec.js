describe('jQuery', function () {
  beforeEach(module('jQuery'))

  var $
  var $window

  beforeEach(inject(function (_jQuery_, _$window_) {
    $ = _jQuery_
    $window = _$window_
  }))

  it('should return the jQuery library from $window', function () {
    expect($).toEqual($window.jQuery)
  })
})
