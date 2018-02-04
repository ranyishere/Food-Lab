'use strict';

/* Directives */

angular.module('angularProject.directives', ['http-auth-interceptor'])
	.directive('authApplication', function($cookieStore, $http, $rootScope) {
 		return {
 			restrict: 'A',
    		link: function (scope, elem, attrs) {

    		  var main = document.getElementById("main");
    		  var login = document.getElementById("login-holder");

    		  var applyLogin = function(good) {
    		  	if (good) {
	    		  	main.style.display = "block";
	        		login.style.display = "none";
	        	} else {
	        		main.style.display = "none";
	        		login.style.display = "block";
	        	}
    		  }

          scope.$on('event:auth-loginRequired', function () {
            applyLogin(false)
          });

          scope.$on('event:auth-loginConfirmed', function () {
            applyLogin(true);
          });

    		}
 		}
 	})
 	.directive('login', function($http, $cookieStore, authService) {
 		return {
 			restrict: 'A',
 			template: " <form> " +
     					    "<label>Username</label>" +
      						"<input type='text' ng-model='username'>" +
      						"<label>Password</label>" +
      						"<input type='password' ng-model='password'>" +
      						"<br>" +
      						"<input type='submit'>" +
    					"</form>",
 			link: function(scope, elem, attrs) {

 				elem.bind('submit', function() {

					var user_data = {
		                "username": scope.username,
		                "password": scope.password,
		            };

					//$http.post(constants.serverAddress + "api-token-auth", user_data)
		            $http.post("http://localhost:8001/api-token-auth/", user_data)
		                .success(function(response) {
		                	$cookieStore.put('djangotoken', response.token);
		                    $http.defaults.headers.common['Authorization'] = 'Token ' + response.token;
		                    authService.loginConfirmed();
		            });

 				});

 			}
 		}
 	});
	// TODO: (Hector) adding controller for cms list
	//This directive is to DYNAMICALLY update the food listing
angular.module('foodlab.directives', [])
	.directive('foodDirective',  function($compile) {
			return {
					template:
					'<hr/>'+
					'<div class="form-row">'+
					'<div class="form-group col-md-6">'+
					'<label>Food Name</label>' +
					'<input class="form-control" type="text" ng-model="food.name" placeholder="Food Name"/>'+
					'</div>'+
					'<div class="form-group col-md-6">'+
					'<label>Food Price</label>'+
					'<input class="form-control" type="text" ng-model="food.price" placeholder="Food Price"/>'+
					'</div>'+
					'</div>'+
					'<div class="form-row">'+
					'<div class="form-group col-md-12">'+
					'<label>Food Description</label>'+
					'<input class="form-control" type="text" ng-model="food.description" placeholder="Food Description"/>'+
					'</div></div>',
					link:  function($scope, element, attr) {
						$scope.addFoodList = function() {
							$scope.foodNumberListing++;
      				var appendList = angular.element(
								'<hr/>'+
								'<div class="form-row">'+
								'<div class="form-group col-md-6">'+
								'<label>Food Name '+($scope.foodNumberListing+1)+':</label>' +
								'<input class="form-control" type="text" ng-model="food.name'+$scope.foodNumberListing+'" placeholder="Food Name '+($scope.foodNumberListing+1)+'"/>'+
								'</div>'+
								'<div class="form-group col-md-6">'+
								'<label>Food Price '+($scope.foodNumberListing+1)+'</label>'+
								'<input class="form-control" type="text" ng-model="food.price'+$scope.foodNumberListing+'" placeholder="Food Price '+($scope.foodNumberListing+1)+'"/>'+
								'</div>'+
								'</div>'+
								'<div class="form-row">'+
								'<div class="form-group col-md-12">'+
								'<label>Food Description '+($scope.foodNumberListing+1)+'</label>'+
								'<input class="form-control" type="text" ng-model="food.description'+$scope.foodNumberListing+'" placeholder="Food Description '+($scope.foodNumberListing+1)+'"/>'+
								'</div></div>'
							);
              element.append(appendList);
						}
         }
			 };
	});
