angular.module("hatApp")
	.directive("hatList", function () {
		return {
			restrict: "E",
			templateUrl: "directives/hatListDirective/hatListTemp.html"	
		};
	});