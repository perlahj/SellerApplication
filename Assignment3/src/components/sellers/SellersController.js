"use strict";

angular.module("project3App").controller("SellersController",
	["$scope", "AppResource", "SellerDlg", "centrisNotify", "$translate", 
function SellersController($scope, AppResource, SellerDlg, centrisNotify, $translate) {

	$scope.isLoading = true; 

	AppResource.getSellers().success(function(sellers) {
		$scope.sellers = sellers;
		$scope.gridOptions = {
			data: "sellers",
			rowHeight: 100,
			columnDefs:[
				{field: "name", displayName:"Name", cellTemplate:'<div><a href="#/seller/{{row.entity.id}}">{{row.entity.name}}</a></div>'},
				{field: "category", displayName: "Category"},
				{field:"imagePath", headerCellTemplate: "<div>{{'sellers.Picture'|translate}}</div>", cellTemplate: "<div><img src='{{COL_FIELD}}'/></div>"}
            ]
            // Has translated column heads but then it is not sortable. 
            /*columnDefs:[
				{field: "name", sortable: true, headerCellTemplate:"<div>{{'sellers.Name'|translate}}</div>", cellTemplate:'<div class="ui-grid-cell-contents"><a href="#/seller/{{row.entity.id}}">{{row.entity.name}}</a></div>'},
				{field: "category", sortable: true, headerCellTemplate:"<div>{{'sellers.Category'|translate}}</div>"},
				{field:"imagePath", headerCellTemplate: "<div>{{'sellers.Picture'|translate}}</div>", cellTemplate: '<div class="ui-grid-cell-contents"><img src="{{COL_FIELD}}"/></div>'}
            ]*/
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