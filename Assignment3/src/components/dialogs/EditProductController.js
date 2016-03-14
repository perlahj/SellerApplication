"use strict";

angular.module("project3App").controller("EditProductController", 
	["productParameter", "$scope", "$routeParams",
function EditProductController(productParameter, $scope, $routeParams) {
	
    $scope.product = productParameter;    
	var sellerId = $routeParams.id;

	$scope.onSubmitProduct = function onSubmitProduct() {
		if ($scope.editProductForm.$valid) {	
			$scope.$close($scope.product);
		}
	};

	$scope.onCancel = function onCancel() {
		$scope.$dismiss();
	}; 
}]);