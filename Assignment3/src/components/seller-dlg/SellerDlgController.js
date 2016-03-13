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
		if ($scope.addForm.$valid) { //á að vera valid
			$scope.$close($scope.seller);
		}
	};

	$scope.onCancel = function() {
		$scope.$dismiss();
	}; 

}]);