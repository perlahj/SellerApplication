"use strict";

var app = angular.module("project3App").controller("SellerDetailsController", ["$scope", "AppResource", "SellerDlg", "centrisNotify", "$translate", "$routeParams", "$location",
	function SellerDetailsController($scope, AppResource, SellerDlg, centrisNotify, $translate, $routeParams, $location) {

		$scope.isLoading = true;
		$scope.alert = false;
		var sellerId = $routeParams.id;


		AppResource.getSellerDetails(sellerId).success(function(sellerObj) {
			$scope.seller = sellerObj;
			$scope.isLoading = false;
		}).error(function() {
			$scope.isLoading = false;
		});

		$scope.onEditSeller = function onEditSeller() {
			SellerDlg.edit().then(function(seller) {
				AppResource.updateSeller(sellerId, seller).success(function(returnedSeller) {
					centrisNotify.success("seller-dlg.Messages.EditSucceeded");
					$scope.seller = returnedSeller;
				}).error(function() {
					centrisNotify.error("seller-dlg.Messages.EditFailed");
				});

			});
		};
		$scope.onAddProduct = function onAddProduct() {
			SellerDlg.addP().then(function(seller) {

			});
		};

		$scope.onEditProduct = function onEditProduct(productObject) {
			$scope.product = productObject;
			SellerDlg.editP($scope.product).then(function(product) {});
		};


		$scope.back = function() {
			$location.path("/sellers");
		};

		$scope.changeLanguage = function(key) {
			$translate.use(key);
		};

		//Get products for seller
		AppResource.getSellerProducts(sellerId).success(function(productObj) {
			$scope.products = productObj;
			var isEmpty = function(object) {
				for (var i in object) {
					return false;
				}
				return true;
			};
			console.log(isEmpty(productObj));
			if(isEmpty(productObj)){
				$scope.alert = true;
			}
		});
		//Get top 10 products for seller
		$scope.topProducts = $scope.products.sort(function(a, b) {
			return parseFloat(b.quantitySold) - parseFloat(a.quantitySold);
		});
		$scope.topProducts = $scope.topProducts.slice(0, 10);
		$scope.products = $scope.products.sort(function(a, b) {
			return a.name.localeCompare(b.name);
		});
	}
]);