"use strict";

angular.module("project3App").factory("SellerDlg",
function SellerDlg($uibModal) {
	return {
		show: function() {
			var modalInstance = $uibModal.open( {
				templateUrl: "components/seller-dlg/seller-dlg.html",
				controller: "SellerDlgController"
            });

			return modalInstance.result;
		},
		edit: function() {
			var modalInstance = $uibModal.open( {
				templateUrl: "components/seller-dlgEdit/seller-dlgEdit.html",
				controller: "SellerDlgEditController"
            });

			return modalInstance.result;
		},
		editP: function(productObject) {
			var modalInstance = $uibModal.open( {
				templateUrl: "components/seller-dlgEdit/editProduct.html",
				controller: "EditProductController",
				 resolve: {
                   productParameter: function () {
                       return productObject;
                   }
               }
            });

			return modalInstance.result;
		},
		addP: function() {
			var modalInstance = $uibModal.open( {
				templateUrl: "components/seller-dlgEdit/editProduct.html",
				controller: "EditProductController"
            });

			return modalInstance.result;
		}
	};
});
