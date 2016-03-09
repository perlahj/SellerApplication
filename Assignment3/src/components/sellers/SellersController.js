"use strict";

angular.module("project3App").controller("SellersController",
	["$scope", "AppResource", "SellerDlg", "centrisNotify", "$translate",
function SellersController($scope, AppResource, SellerDlg, centrisNotify, $translate) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.

	$scope.isLoading = true;



	AppResource.getSellers().success(function(seller) {
		$scope.seller = seller;
		$scope.isLoading = false;
	}).error(function() {
		$scope.isLoading = false;
	});

	$scope.onAddSeller = function onAddSeller() {
		
		SellerDlg.show().then(function(seller) {
			AppResource.addSeller(seller).success(function(seller, category) {
				var newSeller = seller;
				var newCategory = category;
				$scope.sellers.push(seller);
			}).error(function() {
				//centrisNotify.error("sellers.Messages.SaveFailed");
			});
		});
	};

	$scope.changeLanguage = function(key){
			console.log("changeLanguage");
			$translate.use(key);
	};

}]);