(function() {
	'use strict';

	var app = angular.module('ors-route', ['ngRoute']);

	app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$locationProvider
			.html5Mode(true)
			.hashPrefix('');

		$routeProvider
			.when('/', {
				templateUrl: 'ors-route/tmpl/home.html'
			})
			.when('/product', {
				templateUrl: 'ors-route/tmpl/product.html'
			})
			.when('/service', {
				templateUrl: 'ors-route/tmpl/service.html'
			})
			.when('/contact', {
				templateUrl: 'ors-route/tmpl/contact.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);

})();
