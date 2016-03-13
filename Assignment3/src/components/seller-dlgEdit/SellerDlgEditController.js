"use strict";

angular.module("project3App").controller("SellerDlgEditController", 
	["$scope", "$routeParams", "AppResource", "centrisNotify",
function SellerDlgEditController($scope, $routeParams, AppResource, centrisNotify) {
	
	var sellerId = $routeParams.id;

	$scope.seller = {
		name: "",
		category: "",
		imagePath: ""
	};

	AppResource.getSellerProducts(sellerId).success(function(productsObj) {
			$scope.products = productsObj;
		});

	$scope.onSubmit = function onSubmit() {
		if ($scope.editForm.$valid) {	
			$scope.$close($scope.seller);
		}
	};

	$scope.onCancel = function onCancel() {
		$scope.$dismiss();
	};

}]);