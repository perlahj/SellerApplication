"use strict";

angular.module("project3App").controller("SellerDlgController",
	["$scope",
function SellerDlgController($scope) {
	
	$scope.seller = {
		//láta notandann setja gögn inn í
		name: "",
		category: "",
		imagePath: ""

	};

	$scope.onSubmit = function() {
		//if ($scope.seller.name.length === 0 || $scope.seller.category.length === 0) {
		/*if ($scope.addForm.$invalid) { //á að vera valid

			//Birta validation skilaboð
			return;
		}
		$scope.$close($scope.seller);*/

		if ($scope.addForm.$valid) { //á að vera valid
			$scope.$close($scope.seller);
		}
	};

	$scope.onCancel = function() {
		$scope.$dismiss();
	}; 

}]);