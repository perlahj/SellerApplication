"use strict";

angular.module("project3App").controller("AddProductController",
	["$scope", "$routeParams", "AppResource", "SellerDlg",
function AddProductController($scope, $routeParams, AppResource, SellerDlg) {

	$scope.sellerId = parseInt($routeParams.id);
 	$scope.product = {
		//láta notandann setja gögn inn í
		name: "",
		price: "",
		quantityInStock: "",
		quantitySold: "",
		imagePath: ""

	};

	$scope.onSubmitProduct = function() {
		if ($scope.addProductForm.$valid) { //á að vera valid
			AppResource.addSellerProduct($scope.sellerId, $scope.product).success(function(returnedProduct) {
					console.log(typeof($scope.sellerId));
					console.log("Added product successfully");
					console.log(returnedProduct);
					//$scope.product = returnedProduct;
					//centrisNotify.success("seller-dlg.Messages.EditSucceeded");
				}).error(function() {
					//centrisNotify.error("seller-dlg.Messages.EditFailed");
					console.log("Error adding product");
				});
			$scope.$close($scope.product);
		}
	};	

	$scope.onCancel = function() {
		$scope.$dismiss();
	}; 

}]);