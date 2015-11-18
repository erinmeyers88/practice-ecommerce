angular.module("hatApp")
	.service("hatService", function ($http) {
		
		
		//Get list of properties
		this.getHats = function () {
			return $http ({
				method: "GET",
				url: "/api/hats"
			}).then(function (response) {
				return response.data;
			});
			
		};
		
		//Add to list of properties
		this.addHat = function (newProperty) {
			return $http ({
				method: "POST",
				url: "/api/hats",
				data: newProperty
			}).then(function (response) {
				return response.data;
			});
		};
		
		
		
		
		//Update property
		this.editHat = function (id, updatedInfo) {
			return $http({
				method: "PUT",
				url: "/api/hats/" + id,
				data: updatedInfo
			});
		};
		
		//Delete property
		this.deleteHat = function (id) {
			return $http({
				method: "DELETE",
				url: "/api/hats/" + id
			});
		};
		
		
	});