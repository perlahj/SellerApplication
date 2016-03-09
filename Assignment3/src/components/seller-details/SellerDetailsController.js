"use strict";

angular.module("project3App").controller("SellerDetailsController", ["$scope", "AppResource",
function SellerDetailsController($scope, AppResource) {
	
//Virkar ekki
	AppResource.getSellerDetails($scope.id).success(function(seller, category) {
		$scope.seller = seller;
		$scope.category = category;
	}).error(function() {
	});

	/*$scope.back = function() {
		$location.path("/seller");
	};*/


/*	Virkar ekki
	$scope.onEditSeller = function onEditSeller() {
		SellerDlg.show().then(function(seller) {
			AppResource.updateSeller(seller).success(function(seller) {
				var editSeller = seller;

			}).error(function() {
				//centrisNotify.error("sellers.Messages.SaveFailed");
			});
		});
	};
*/
}]);