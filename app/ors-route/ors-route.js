'use strict';
var orsRoute = 'ors-route';
import 'angular-route';

var app = angular.module(orsRoute, ['ngRoute']);
import homeUrl from './tmpl/home.html';
import contactUrl from './tmpl/contact.html';
import productUrl from './tmpl/product.html';
import serviceUrl from './tmpl/service.html';
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$locationProvider
		.html5Mode(true)
		.hashPrefix('');

	$routeProvider
		.when('/', {
			templateUrl: homeUrl
		})
		.when('/product', {
			templateUrl: productUrl,
			controller: 'ProductCtrl',
			controllerAs: '$ctrl'
		})
		.when('/service', {
			templateUrl: serviceUrl
		})
		.when('/contact', {
			templateUrl: contactUrl
		})
		.otherwise({
			redirectTo: '/'
		});
}]);
