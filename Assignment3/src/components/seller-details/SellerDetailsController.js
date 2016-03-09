"use strict";

angular.module("project3App").controller("SellerDetailsController", 
	["$scope", "AppResource", "SellerDlg", "centrisNotify", "$translate", "$routeParams", "$location",
function SellerDetailsController($scope, AppResource, SellerDlg, centrisNotify, $translate, $routeParams, $location) {
	
	$scope.isLoading = true;
	
	var sellerId = $routeParams.id;

	AppResource.getSellerDetails(sellerId).success(function(sellerObj) {
			$scope.seller = sellerObj;
			$scope.isLoading = false;
		}).error(function(){
			$scope.isLoading = false;
		});

//Virkar ekki
	/*$scope.onEditSeller = function onEditSeller(seller) {
		console.log("seller in edit: " + seller);
		SellerDlg.show().then(function(seller) {
			AppResource.updateSeller(sellerId, seller).success(function(seller) {
				console.log("Updated seller successfully");

			}).error(function() {
				//centrisNotify.error("sellers.Messages.SaveFailed");
				console.log("Error updating seller");
			});
		});
	};*/


	$scope.back = function() {
		$location.path("/sellers");
	};

	$scope.changeLanguage = function(key){
			$translate.use(key);
	};
}]);