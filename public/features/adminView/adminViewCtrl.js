angular.module("hatApp")
	.controller("adminCtrl", function ($scope, hatService) {
		
		//Get list of hats onto $scope
		$scope.getHats = function () {
			hatService.getHats().then(function (response) {
			$scope.hats = response;
			});
		};
		
		$scope.getHats();
		
		//Add hat to $scope
		$scope.addHat = function () {
			hatService.addHat($scope.newHat).then(function (response) {
				console.log(response);
				$scope.hats.push(response);
			});
		};
		
		
		
		//Get hat IDs to delete
		$scope.IdsToDelete = [];
		$scope.getIdsToDelete = function (id) {
			$scope.IdsToDelete.push(id);
			console.log($scope.IdsToDelete);
		};
		
		
		
		//Delete property from $scope
		$scope.deleteHat = function () {
			$scope.IdsToDelete.forEach(function (id) {
				hatService.deleteHat(id).then(function (response) {
					$scope.getHats();
				});
			});
			
			$scope.IdsToDelete = [];
			
		};
		
		//Update property on $scope
		
		$scope.prefillValue = {};
		
		$scope.switch = true;
		
		$scope.editHat = function () {
			$scope.switch = true;
			$scope.prefillValue = document.getElementById("hatData");
			$scope.prefillValue = 
			hatService.editProperty().then(function (response) {
			$scope.getHats();
			});
		};
		
		
	});