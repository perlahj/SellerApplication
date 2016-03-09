"use strict";

angular.module("project3App").controller("SellerDetailsController", 
	["$scope", "AppResource", "SellerDlg", "centrisNotify", "$translate",
function SellerDetailsController($scope, AppResource, SellerDlg, centrisNotify, $translate) {
	
	$scope.isLoading = true;

//Virkar ekki
	AppResource.getSellerDetails($scope.id).success(function(seller, category, id) {
		$scope.id = id;
		$scope.seller = seller;
		$scope.category = category;
		$scope.isLoading = false;
	}).error(function() {
		$scope.isLoading = false;
	});

//Virkar ekki
	$scope.onEditSeller = function onEditSeller() {
		SellerDlg.show().then(function(seller) {
			AppResource.updateSeller($scope.id, seller).success(function(seller, category) {
				var editSeller = seller;
				var editCategory = category;

			}).error(function() {
				//centrisNotify.error("sellers.Messages.SaveFailed");
			});
		});
	};


	/*$scope.back = function() {
		$location.path("/seller");
	};*/

	$scope.changeLanguage = function(key){
			console.log("changeLanguage");
			$translate.use(key);
	};
}]);