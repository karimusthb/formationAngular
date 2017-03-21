(function() {
	'use strict';

	var app = angular.module('main', ['ors-route']);

	app.run(['$injector', function($injector) {
		var $rootScope = $injector.get('$rootScope');
		var $location = $injector.get('$location');
		
		$rootScope.isActive = function(url) {
			var path = $location.path();
			console.log('path', path);
			return url === path;
		};
		console.log('run');
	}]);

	app.directive('orsActive', function() {
		return {
			restrict: 'A',
			controller: ['$scope', '$attrs', '$element', '$location',
				function($scope, $attrs, $element, $location) {
					console.log('$attrs', $attrs);
					var refresh = function(next, current) {
						var url = $attrs.href;
						var path = '.' + $location.path();
						console.log('path', path);
						if (url === path) {
							$element.addClass('active');
						} else {
							$element.removeClass('active');
						}
					}
					$scope.$on('$routeChangeStart', refresh);
					refresh();
				}
			]
		};
	});

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
