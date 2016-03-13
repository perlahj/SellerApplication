"use strict";

angular.module("project3App").controller("EditProductController", 
	["productParameter", "$scope", "$routeParams", "AppResource", "centrisNotify",
function EditProductController(productParameter, $scope, $routeParams, AppResource, centrisNotify) {
	
	//$scope.data = param.;
    //$scope.yourData = param.yourData;
    $scope.product = productParameter;    

	var sellerId = $routeParams.id;

	AppResource.getSellerDetails(sellerId).success(function(sellerObj) {
			$scope.seller = sellerObj;
			$scope.isLoading = false;
			//console.log(sellerObj);
		}).error(function(){
			$scope.isLoading = false;
		});

	AppResource.getSellerProducts(sellerId).success(function(productsObj) {
			//console.log($scope.product);
			$scope.products = productsObj;
		});


	$scope.onSubmitProduct = function onSubmitProduct() {
		if ($scope.editProductForm.$valid) {	
			var newProduct = {
				name : $scope.product.name,
				category : $scope.product.category,
				imagePath : $scope.product.imagePath
			};
			//console.log(newSeller);

			AppResource.updateProduct($scope.product.id, $scope.product).success(function(returnedProduct) {
					console.log("Updated product successfully");
					console.log(returnedProduct);
					$scope.product = returnedProduct;
					//centrisNotify.success("seller-dlg.Messages.EditSucceeded");
				}).error(function() {
					//centrisNotify.error("seller-dlg.Messages.EditFailed");
					//console.log("Error updating seller");
				});
			$scope.$close($scope.product);
		}
	};


	$scope.onCancel = function onCancel() {
		$scope.$dismiss();
	}; 
}]);