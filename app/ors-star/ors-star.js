(function() {
	'use strict';

	var app = angular.module('ors-star', []);

	app.component('orsStar', {
		bindings: {
			n: '=?note',
		},
		controller: ['$scope', '$element', '$compile',
			function($scope, $element, $compile) {
				console.log('orsStar ctrl', arguments);
				var ctrl = this;
				ctrl.update = function(n) {
					console.log('update', arguments);
					ctrl.n = n;
				};
				$scope.$watch('$ctrl.n', function() {
					var html = '';
					var note = 4;
					note = (ctrl.n === undefined) ? note : Number(ctrl.n);
					note = (isNaN(note)) ? 0 : note;
					note = (note > 5) ? 5 : note;
					note = (note < 0) ? 0 : note;
					for (let i = 0; i < note; i++) {
						html += '<img ng-click="$ctrl.update(' + (i + 1) + ')" src="./ors-star/img/yellow_star.png" />';
					}

					for (let i = note; i < 5; i++) {
						html += '<img ng-click="$ctrl.update(' + (i + 1) + ')" src="./ors-star/img/white_star.png" />';
					}
					$element.html(html);
					$compile($element.contents())($scope);
				});
			}
		]
	});

})();
