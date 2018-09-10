'use strict';

//Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.html',
		});
	
		
	}
]);