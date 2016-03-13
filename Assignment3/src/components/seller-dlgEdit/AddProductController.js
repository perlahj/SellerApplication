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
			$scope.$close($scope.product);
		}
	};	

	$scope.onCancel = function() {
		$scope.$dismiss();
	}; 

}]);