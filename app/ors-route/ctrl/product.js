'use strict';

var app = angular.module('ors-route');

app.controller('ProductCtrl', ['$injector', function($injector) {
	var ctrl = this;
	var $q = $injector.get('$q');
	var $http = $injector.get('$http');

	ctrl.start = function() {
		console.log('Product ctrl Start', arguments);
		ctrl.logs = [];

		$http.get('../ws/s1').then(function(response) {
			console.log('response', response);
			ctrl.logs.push(response.data);
			return $q.all([
				$http.get('../ws/s2'),
				$http.get('../ws/s3'),
				$http.get('../ws/s4')
			]);
		}).then(function(responses) {
			console.log('responses', responses);
			ctrl.logs.push(responses[0].data);
			ctrl.logs.push(responses[1].data);
			ctrl.logs.push(responses[2].data);
			return $http.get('../ws/s5');
		}).then(function(response) {
			ctrl.logs.push(response.data);
		}).catch(function(error) {
			console.error('error', error);
		});
	};
}]);
