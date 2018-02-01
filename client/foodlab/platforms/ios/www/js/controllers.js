'use strict';

angular.module('foodlab.controllers', [])

	.controller('MainCtrl', ['$scope', '$rootScope', '$window', '$location', function ($scope, $rootScope, $window, $location) {
		$scope.slide = '';
		$rootScope.back = function() {
			$scope.slide = 'slide-right';
			$window.history.back();
		}
		$rootScope.go = function(path){
			$location.url(path);
		}
	}])

	/// Pulls from memory services here

	.controller('RestaurantListCtrl', ['$scope', 'Restaurant', function ($scope, Restaurant) {
		$scope.restaurants = Restaurant.query();
	}])

	.controller('RestaurantDetailCtrl', ['$scope', '$routeParams', 'Restaurant', function ($scope, $routeParams, Menu) {
		$scope.restaurant = Restaurant.get({restaurantId: $routeParams.restaurantID});
	}]);

