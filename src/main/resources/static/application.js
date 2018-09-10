'use strict';

angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

angular.module(ApplicationConfiguration.applicationModuleName).config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
]);

angular.element(document).ready(function() {
	if (window.location.hash === '#_=_') window.location.hash = '#!';
	angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});