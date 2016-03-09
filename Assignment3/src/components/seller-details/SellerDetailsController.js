"use strict";

angular.module("project3App").controller("SellerDetailsController", 
	["$scope", "AppResource", "SellerDlg", "centrisNotify", "$translate", "$routeParams",
function SellerDetailsController($scope, AppResource, SellerDlg, centrisNotify, $translate, $routeParams) {
	
	$scope.isLoading = true;
	
	var sellerId = $routeParams.id;

	AppResource.getSellerDetails(sellerId).success(function(sellerObj) {
			console.log(sellerObj);
			$scope.seller = sellerObj;
			$scope.isLoading = false;
		}).error(function(){
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
			$translate.use(key);
	};
}]);