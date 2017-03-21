(function() {
	'use strict';

	var app = angular.module('ors-star', []);

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

})();
