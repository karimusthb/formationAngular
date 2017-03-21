(function() {
	'use strict';

	var app = angular.module('main', ['ors-route']);

	app.component('orsHeader', {
		templateUrl: 'tmpl/ors-header.html'
	});


	app.directive('orsBody', function() {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/ors-body.html'
		};
	});


	app.directive('orsFooter', function() {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/ors-footer.html',
		};
	});

})();
