(function() {
	'use strict';

	var app = angular.module('main', ['ors-route']);

	app.run(['$rootScope', '$location', function($rootScope, $location) {
		$rootScope.isActive = function(url) {
			var path = $location.path();
			console.log('path', path);
			return url === path;
		};
		console.log('coucou');
	}]);

	app.directive('orsActive', function() {
		return {
			restrict: 'A',
			controller: ['$scope', 'attrs', '$element', '$location', function($scope, $attrs, $element, $location) {
				console.log('attrs', $attrs);

				$scope.$on('$routeChangeStart', function(next, current) {
					var url = $attrs.href;
					var path = '#' + $location.path();
					if (url === path) {
						$element.addClass('active');
					} else {
						$element.removeClass('active');
					}
				});

			}]
		};
	})

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
