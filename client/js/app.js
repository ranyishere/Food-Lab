'use strict';

angular.module('foodlab', [
	'ngTouch',
	'ngRoute',
	'ngAnimate',
	'foodlab.controllers',
	'foodlab.directives',
	'foodlab.memoryServices',
	'foodlab'
])
	.config(['$routeProvider', function($routeProvider)  {
		$routeProvider
			.when('/restaurants', {templateUrl: 'partials/restaurant-list.html', controller: 'RestaurantListCtrl'})
			.when('/restaurants/:restaurantId', {templateUrl: 'partials/restaurant-detail.html', controller: 'RestaurantDetailCtrl'})
			.when('/login',{templateUrl: 'partials/login.html', controller: 'LoginCtrl'})
			.when('/map', {templateUrl: 'partials/map.html', controller: 'MapCtrl'})
			.when('/cms', {templateUrl:'partials/restaurant-cms.html', controller:'ContentManagerCtrl'})
			.otherwise({redirectTo: '/restaurants'});
	}]);
