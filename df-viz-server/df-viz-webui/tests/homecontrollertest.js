describe('Controller: HomeController', function() {
	beforeEach(angular.mock.module('dfVizApp'));

	var homeController;

	beforeEach(inject(function(_$controller_, _$rootScope_, $httpBackend, _$location_, _$q_) {
		$rootScope  = _$rootScope_;
		$controller = _$controller_;
		scope = $rootScope.$new();
		httpBackend = $httpBackend;
		location = _$location_;
		qService = _$q_;

		homeController = $controller("HomeController", {
			$scope: scope,
			$http: httpBackend,
			$location: location,
			$q: qService
		});
	}));

	it("HomeController should have a serverName", function() {
		expect(homeController).toBeDefined();
		expect(homeController.serverName).toBeDefined();
	});
});