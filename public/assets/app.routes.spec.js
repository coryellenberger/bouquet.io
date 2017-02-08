describe('RouteConfig', function () {
  it('should set hasPrefix', function () {
    var $locationProvider

    angular
      .module('locationProviderConfig', [])
      .config(function (_$locationProvider_) {
        $locationProvider = _$locationProvider_
        spyOn($locationProvider, 'hashPrefix')
      })
    module('locationProviderConfig')
    module('bouquet')
    inject()
    expect($locationProvider.hashPrefix).toHaveBeenCalledWith('')
  })

  describe('should configure routes', function () {
    var $route
    var PATH = 'assets/components/'

    beforeEach(module('bouquet'))

    beforeEach(inject(function (_$route_) {
      $route = _$route_
    }))

    it('for /', function () {
      expect($route.routes['/'].templateUrl).toEqual(PATH + 'home/home.html')
    })

    it('for /generic', function () {
      expect($route.routes['/generic'].templateUrl).toEqual(PATH + 'generic/generic.html')
    })

    it('for /elements', function () {
      expect($route.routes['/elements'].templateUrl).toEqual(PATH + 'elements/elements.html')
    })

    it('to redirect to / if unknown route', function () {
      expect($route.routes[null].redirectTo).toEqual('/')
    })
  })
})
