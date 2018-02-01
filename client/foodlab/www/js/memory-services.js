'use strict';

(function () {

	var restaurants = [
		{"id": 0 , "name": "Restaurant1", "location": "Upper Floor", "menu": 1, "summary": "Good Food", "hours": "9-5pm"},
		{"id": 1 , "name": "Restaurant2", "location": "Lower Floor", "menu": 1, "summary": "Good Food", "hours": "9-5pm"},
		{"id": 2 , "name": "Restaurant3", "location": "Lower Floor", "menu": 1, "summary": "Good Food", "hours": "9-5pm"},
		{"id": 3 , "name": "Restaurant4", "location": "Upper Floor", "menu": 1, "summary": "Good Food", "hours": "9-5pm"},
		{"id": 4 , "name": "Restaurant5", "location": "Upper Floor", "menu": 1, "summary": "Good Food", "hours": "9-5pm"},
		{"id": 5 , "name": "Restaurant6", "location": "Upper Floor", "menu": 1, "summary": "Good Food", "hours": "9-5pm"},
		{"id": 6 , "name": "Restaurant7", "location": "Upper Floor", "menu": 1, "summary": "Good Food", "hours": "9-5pm"},
		{"id": 7 , "name": "Restaurant8", "location": "Upper Floor", "menu": 1, "summary": "Good Food", "hours": "9-5pm"},
		{"id": 8 , "name": "Restaurant9", "location": "Upper Floor", "menu": 1, "summary": "Good Food", "hours": "9-5pm"},
		{"id": 9 , "name": "Restaurant10", "location": "Upper Floor", "menu": 1, "summary": "Good Food", "hours": "9-5pm"},
		{"id": 10 , "name": "Restaurant11", "location": "Upper Floor", "menu": 1, "summary": "Good Food", "hours": "9-5pm"}
	];
	var findById = function (id) {

		var restaurant = null,
		l = restaurants.length;

		for (var i = 0; i < l; i = i+1) {
			if (restaurant[i].id === id) {
				restaurant = restaurant[i];
				break;
			}
		}
		return restaurant;
	};

	angular.module('foodlab.memoryServices', [])
	.factory('Restaurant', [
		function () {
			return {
				query: function () {
					console.log(restaurants);
					return restaurants;
				},
				get: function (restaurant) {
					return findById(parseInt(restaurant.restaurantId));
				}
			}
		}]);
	/// Might need to Menu function here
}());

