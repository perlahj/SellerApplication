"use strict";

angular.module("project3App").controller("SellersController",
	["$scope", "AppResource", "SellerDlg", "centrisNotify", "$translate",
function SellersController($scope, AppResource, SellerDlg, centrisNotify, $translate) {

	$scope.isLoading = true;

	AppResource.getSellers().success(function(seller) {
		$scope.seller = seller;
		$scope.isLoading = false;
	}).error(function() {
		$scope.isLoading = false;
	});

	// Þurfum að bæta við myndavalmöguleika og setja inn centris tilkynningar
	$scope.onAddSeller = function onAddSeller() {	
		SellerDlg.show().then(function(seller) {
			if(seller.imagePath === ""){
				seller.imagePath = AppResource.defaultSellerPicturePath;
			}
			AppResource.addSeller(seller).success(function(seller) {
			}).error(function() {
				console.log("error here");
				//centrisNotify.error("sellers.Messages.SaveFailed");
			});
		});
	};

	$scope.changeLanguage = function(key){
		$translate.use(key);
	};

}]);