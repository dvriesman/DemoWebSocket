'use strict';

var ApplicationConfiguration = (function() {

	var applicationModuleName = 'demo';
	var applicationModuleVendorDependencies = ['ngResource', 'ui.router', 'ngStomp'];

	var registerModule = function(moduleName, dependencies) {
		angular.module(moduleName, dependencies || []);
		angular.module(applicationModuleName).requires.push(moduleName);
	};

	return {
		applicationModuleName: applicationModuleName,
		applicationModuleVendorDependencies: applicationModuleVendorDependencies,
		registerModule: registerModule
	};
})();
