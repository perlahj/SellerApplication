"use strict";

var app = angular.module("project3App").controller("SellerDetailsController", ["$scope", "AppResource", "SellerDlg", "centrisNotify", "$translate", "$routeParams", "$location",
	function SellerDetailsController($scope, AppResource, SellerDlg, centrisNotify, $translate, $routeParams, $location) {

		$scope.isLoading = true;
		$scope.alert = false;
		var sellerId = parseInt($routeParams.id);

		AppResource.getSellerDetails(sellerId).success(function(sellerObj) {
			$scope.seller = sellerObj;
			$scope.isLoading = false;
		}).error(function() {
			$scope.isLoading = false;
		});

		//Get products for seller
		AppResource.getSellerProducts(sellerId).success(function(productObj) {
			$scope.products = productObj;
			var isEmpty = function(object) {
				for (var i in object) {
					return false;
				}
				return true;
			};
			if (isEmpty(productObj)) {
				$scope.alert = true;
			}
		});

		$scope.onEditSeller = function onEditSeller() {
			SellerDlg.edit().then(function(seller) {
				AppResource.updateSeller(sellerId, seller).success(function(returnedSeller) {
					centrisNotify.success("sellerdetails.Messages.EditSucceeded");
					$scope.seller = returnedSeller;
				}).error(function() {
					centrisNotify.error("sellerdetails.Messages.EditFailed");
				});

			});
		};

		$scope.onAddProduct = function onAddProduct() {
			SellerDlg.addP().then(function(product) {
				AppResource.addSellerProduct(sellerId, product).success(function(returnedProduct) {
					centrisNotify.success("products.Messages.SaveSucceeded");
					$scope.products.push(returnedProduct);
					// Update alert
					if ($scope.alert === true) {
						$scope.alert = false;
					}
					$scope.getTop10Products();
					$scope.onSort("name");
				}).error(function() {
					centrisNotify.error("products.Messages.SaveFailed");
				});
			});
		};

		$scope.onEditProduct = function onEditProduct(productObject) {
			$scope.product = productObject;
			SellerDlg.editP($scope.product).then(function(product) {
				AppResource.updateProduct($scope.product.id, $scope.product).success(function(returnedProduct) {
					$scope.product = returnedProduct;
					centrisNotify.success("products.Messages.EditSucceeded");
					$scope.getTop10Products();
					$scope.onSort("name");
				}).error(function() {
					centrisNotify.error("products.Messages.EditFailed");
				});
			});
		};

		$scope.getTop10Products = function() {
			//Get top 10 products for seller
			$scope.topProducts = $scope.products.sort(function(a, b) {
				return parseFloat(b.quantitySold) - parseFloat(a.quantitySold);
			});
			$scope.topProducts = $scope.topProducts.slice(0, 10);
		};

		$scope.onSort = function(sortingMethod) {
			switch (sortingMethod) {
				case "name":
					{
						$scope.products = $scope.products.sort(function(a, b) {
							return a.name.localeCompare(b.name);
						});
						break;
					}
				case "category":
					{
						$scope.products = $scope.products.sort(function(a, b) {
							return a.category.localeCompare(b.category);
						});
						break;
					}
				case "price":
					{
						$scope.products = $scope.products.sort(function(a, b) {
							return parseFloat(b.price) - parseFloat(a.price);
						});
						break;
					}
				case "quantityInStock":
					{
						$scope.products = $scope.products.sort(function(a, b) {
							return parseFloat(b.quantityInStock) - parseFloat(a.quantityInStock);
						});
						break;
					}
			}
		};


		// Get the top 10 products
		$scope.getTop10Products();
		// Sort products alphabetically
		$scope.onSort("name");
		

		$scope.back = function() {
			$location.path("/sellers");
		};

		$scope.changeLanguage = function(key) {
			$translate.use(key);
		};
	}
]);