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
		name: "húfa",
		category: "föt",
		price: "1000",
		quantitySold: "5",
		quantityInStock: "5",
		imagePath: "http://i.imgur.com/MZOmRnH.jpg",
  	};
  	$scope.mockproduct2 = {
		name: "buxur",
		category: "föt",
		price: "2000",
		quantitySold: "2",
		quantityInStock: "1",
		imagePath: "http://i.imgur.com/0XKznD4.jpg?1"
  	};
  	$scope.mockproduct3 = {
		name: "brók",
		category: "föt",
		price: "3000",
		quantitySold: "6",
		quantityInStock: "8",
		imagePath: "http://i.imgur.com/50ivFlC.jpg"
  	};
  	$scope.mockproduct4 = {
		name: "sokkar",
		category: "föt",
		price: "4000",
		quantitySold: "7",
		quantityInStock: "7",
		imagePath: "https://farm6.static.flickr.com/5205/5298302908_fb75ed8e0a.jpg"
  	};
  	$scope.mockproduct5 = {
		name: "trefill",
		category: "föt",
		price: "5000",
		quantitySold: "6",
		quantityInStock: "9",
		imagePath: "http://purnahandmade.com/media/catalog/product/cache/1/image/ab49223884317513dca074f3bc642368/p/h/phc_malle_08_orwh.jpg"
  	};
  	$scope.mockproduct6 = {
		name: "vettlingar",
		category: "föt",
		price: "6000",
		quantitySold: "8",
		quantityInStock: "1",
		imagePath: "https://img1.etsystatic.com/050/1/5847299/il_214x170.730058347_mt4x.jpg"
  	};
  	$scope.mockproduct7 = {
		name: "buxur",
		category: "föt",
		price: "7000",
		quantitySold: "1",
		quantityInStock: "4",
		imagePath: "http://www.newmanmayahandicraft.com.np/wp-content/uploads/2015/10/woolen-jacket-with-multicolored-design.jpg"
  	};
  	$scope.mockproduct8 = {
		name: "bolur",
		category: "föt",
		price: "8000",
		quantitySold: "2",
		quantityInStock: "9",
		imagePath: "https://upload.wikimedia.org/wikipedia/commons/7/75/Selburose-sweater.jpg"
  	};


}]);
