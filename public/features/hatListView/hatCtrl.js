angular.module("hatApp")
	.controller("hatCtrl", function ($scope, hatService) {

		//Get list of hats onto $scope
		$scope.getHats = hatService.getHats().then(function (response) {
			$scope.hats = response;
		});
		
		$scope.getHats();
		
	});