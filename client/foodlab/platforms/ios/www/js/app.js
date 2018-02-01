'use strict';

angular.module('foodlab', [
	'ngTouch',
	'ngRoute',
	'ngAnimate',
	'foodlab.controllers',
	'foodlab.memoryServices'
]).
	config(['$routeProvider', function($routeProvider)  {
		$routeProvider.when('/restaurants', {templateUrl: 'partials/restaurant-list.html', controller: 'RestaurantListCtrl'});
		$routeProvider.when('/restaurants/:restaurantId', {templateUrl: 'partials/restaurant-detail.html', controller: 'RestaurantDetailCtrl'});
		$routeProvider.when('/employees/:restaurantId/menu', {templateUrl: 'partials/menu.html', controller: 'MenuCtrl'}); 
		$routeProvider.otherwise({redirectTo: '/restaurants'});
	}]);
