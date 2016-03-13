"use strict";

var app = angular.module("project3App").controller("SellerDetailsController", 
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

	$scope.onEditSeller = function onEditSeller() {
		SellerDlg.edit().then(function(seller) {

		});
	};
	$scope.onAddProduct = function onAddProduct() {
		SellerDlg.addP().then(function(seller) {

		});
	};

	$scope.onEditProduct = function onEditProduct(productObject) {
		//console.log("rugl");
		$scope.product = productObject;
		SellerDlg.editP($scope.product).then(function(product) {

		});
	};


	$scope.back = function() {
		$location.path("/sellers");
	};

	$scope.changeLanguage = function(key){
			$translate.use(key);
	};

	//Get products for seller
	AppResource.getSellerProducts(sellerId).success(function(productObj) {
			$scope.products = productObj;
		});
	//Get top 10 products for seller
	$scope.topProducts = $scope.products.sort(function(a, b) {
    return parseFloat(b.quantitySold) - parseFloat(a.quantitySold);
	});
	$scope.topProducts = $scope.topProducts.slice(0,10);
	$scope.products = $scope.products.sort(function(a, b) {
	   return a.name.localeCompare(b.name);
	});
}]);
