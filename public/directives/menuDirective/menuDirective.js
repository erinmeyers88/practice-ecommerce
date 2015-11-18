angular.module("hatApp")
	.directive("menu", function () {
		
		return {
			restrict: "E",
			templateUrl: "directives/menuDirective/menuDirective.html"	
		};
		
	});