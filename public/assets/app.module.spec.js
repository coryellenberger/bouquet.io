describe('bouquet', function () {
  var bouquetApp

  beforeEach(function () {
    bouquetApp = angular.module('bouquet')
  })

  it('should return the ngRoute module', function () {
    expect(bouquetApp.requires[0]).toEqual('ngRoute')
  })

  it('should return the ngResource module', function () {
    expect(bouquetApp.requires[1]).toEqual('ngResource')
  })

  it('should return the jQuery module', function () {
    expect(bouquetApp.requires[2]).toEqual('jQuery')
  })

  it('should return the lodash module', function () {
    expect(bouquetApp.requires[3]).toEqual('lodash')
  })
})
