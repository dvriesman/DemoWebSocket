angular.module('core').controller('PageController', ['$http', '$scope', '$stomp', '$log',function ($http, $scope, $stomp, $log) {
	
	$scope.name = "TestX";
	$scope.message = "";
		
	$scope.doSomething = function() {
		$http.get("/demo/doSomething/" + $scope.name);
	}
	
	$scope.init = function() {
		
		$stomp.setDebug(function (args) {
		      $log.debug(args)
		});
		
		$stomp.connect('/messaging', {}).then(function (frame) {
			$stomp.subscribe('/topic/notification', function (values, headers, res) {
				$scope.message = values;
				$scope.$apply();
	          });
	       
	     });
		        
	};
    
}]);