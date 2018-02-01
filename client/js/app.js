'use strict';

angular.module('foodlab', [
	'ngTouch',
	'ngRoute',
	'ngAnimate',
	'foodlab.controllers',
	'foodlab.memoryServices',
])
	.config(['$routeProvider', function($routeProvider)  {
		$routeProvider.when('/restaurants', {templateUrl: 'partials/restaurant-list.html', controller: 'RestaurantListCtrl'});
		$routeProvider.when('/restaurants/:restaurantId', {templateUrl: 'partials/restaurant-detail.html', controller: 'RestaurantDetailCtrl'});
		$routeProvider.when('/login',{templateUrl: 'partials/login.html', controller: 'LoginCtrl'});
		$routeProvider.when('/map', {templateUrl: 'partials/map.html', controller: 'MapCtrl'});
		$routeProvider.otherwise({redirectTo: '/restaurants'});
	}]);
