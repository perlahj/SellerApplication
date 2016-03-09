"use strict";

angular.module("project3App").controller("SellerDlgController",
function SellerDlgController($scope) {
	
	$scope.seller = {
		//láta notandann setja gögn inn í
		name: "",
		category: "",
		imagePath: ""

	};

	$scope.onOk = function onOk() {
		//TODO: validation - þannig að það verði ekki lokað glugganum nema validatist!!
		
		if ($scope.seller.name.length === 0 || $scope.seller.category.length === 0) {
			//Birta validation skilaboð
			return;
		}
		$scope.$close($scope.seller);
	};

	$scope.onCancel = function onCancel() {
		$scope.$dismiss();
	}; 

});