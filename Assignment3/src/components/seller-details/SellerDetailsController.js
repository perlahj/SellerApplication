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
	console.log($scope.seller);

	$scope.onEditSeller = function onEditSeller() {
		SellerDlg.edit().then(function(seller) {

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
	console.log($scope.products);

	/*testgögn til að gá hvort allt fari í gegnum product.html 
	og productDirective, á að vera eitt product*/
	$scope.mockproduct = {
		title: "mocktitle",
		name: "mockname",
		category: "mockcategory",
		price: "mockprice",
		quantitySold: "mockquantitysold",
		quantityInStock: "mockquantityinstock"
  	};


}]);
