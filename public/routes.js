angular.module("hatApp")
	.config (function ($stateProvider, $urlRouterProvider) {
		
		$stateProvider
			.state("admin", {
				url: "/admin",
				templateUrl: "features/adminView/adminView.html",
				controller: "adminCtrl"
			})
			
			.state("hats", {
				url: "/hats",
				templateUrl: "features/hatListView/hatListView.html",
				controller: "hatCtrl"
			});
		
		
		$urlRouterProvider.otherwise("/");
		
	});