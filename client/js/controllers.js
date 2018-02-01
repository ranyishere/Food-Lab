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
	
	/// TODO(fernando): finish creating login controller
///	.controller('LoginCtrl', ['$cookieStore', '$scope', '$http', function ($cookieStore, $scope, $http) {
		/// if ($cookieStore.get(

	.controller('RestaurantDetailCtrl', ['$scope', 'Restaurant', '$routeParams', function ($scope, Restaurant, $routeParams, Menu) {
		$scope.restaurant = Restaurant.get({restaurantId: $routeParams.restaurantId});
	}]);

