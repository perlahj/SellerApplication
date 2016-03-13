"use strict";

angular.module("project3App").controller("SellerDlgEditController", 
	["$scope", "$routeParams", "AppResource", "centrisNotify",
function SellerDlgEditController($scope, $routeParams, AppResource, centrisNotify) {
	
	var sellerId = $routeParams.id;

	AppResource.getSellerDetails(sellerId).success(function(sellerObj) {
			$scope.seller = sellerObj;
			$scope.isLoading = false;
			//console.log(sellerObj);
		}).error(function(){
			$scope.isLoading = false;
		});

	AppResource.getSellerProducts(sellerId).success(function(productsObj) {
			//console.log($scope.product);
			$scope.products = productsObj;
		});

	$scope.onSubmit = function onSubmit() {
		if ($scope.editForm.$valid) {	
			var newSeller = {
				name : $scope.seller.name,
				category : $scope.seller.category,
				imagePath : $scope.seller.imagePath
			};
			console.log(newSeller);

			AppResource.updateSeller(sellerId, newSeller).success(function(returnedSeller) {
					console.log("Updated seller successfully");
					console.log(returnedSeller);
					$scope.seller = returnedSeller;
					centrisNotify.success("seller-dlg.Messages.EditSucceeded");
				}).error(function() {
					centrisNotify.error("seller-dlg.Messages.EditFailed");
					//console.log("Error updating seller");
				});
			$scope.$close($scope.seller);
		}
	};
		/*//TODO: validation - þannig að það verði ekki lokað glugganum nema validatist!!
		if ($scope.editForm.$invalid) {	
			//	if ($scope.seller.name.length === 0 || $scope.seller.category.length === 0) {
			//Birta validation skilaboð
			return;
		}
		var newSeller = {
			name : $scope.seller.name,
			category : $scope.seller.category,
			imagePath : $scope.seller.imagePath
		};
		console.log(newSeller);

		AppResource.updateSeller(sellerId, newSeller).success(function(returnedSeller) {
				console.log("Updated seller successfully");
				console.log(returnedSeller);
				$scope.seller = returnedSeller;
			}).error(function() {
				//centrisNotify.error("sellers.Messages.SaveFailed");
				console.log("Error updating seller");
			});
		$scope.$close($scope.seller);
	};*/

	$scope.onCancel = function onCancel() {
		$scope.$dismiss();
	}; 
}]);