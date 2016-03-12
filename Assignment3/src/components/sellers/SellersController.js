"use strict";

angular.module("project3App").controller("SellersController",
	["$scope", "AppResource", "SellerDlg", "centrisNotify", "$translate", 
function SellersController($scope, AppResource, SellerDlg, centrisNotify, $translate) {

	$scope.isLoading = true; 

	AppResource.getSellers().success(function(sellers) {
		$scope.sellers = sellers;
		$scope.gridOptions = {
			data: "sellers",
			rowHeight: 150,
			columnDefs:[
				{field: "name", displayName:"Name", cellTemplate:'<div class="ui-grid-cell-contents"><a href="#/seller/{{row.entity.id}}">{{row.entity.name}}</a></div>'},
				{field: "category", displayName:"Category"},
				{field:"imagePath", displayName: "Picture", cellTemplate: '<div class="ui-grid-cell-contents"><img src="{{COL_FIELD}}"/></div>'}
            ]	
		};
		$scope.isLoading = false;
	}).error(function() {
		$scope.isLoading = false;
	});


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