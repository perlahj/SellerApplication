"use strict";

angular.module("project3App").factory("SellerDlg",
function SellerDlg($uibModal) {
	return {
		show: function() {
			var modalInstance = $uibModal.open( {
				templateUrl: "components/dialogs/seller-dlg.html",
				controller: "SellerDlgController"
            });

			return modalInstance.result;
		},
		edit: function() {
			var modalInstance = $uibModal.open( {
				templateUrl: "components/dialogs/seller-dlgEdit.html",
				controller: "SellerDlgEditController"
            });

			return modalInstance.result;
		},
		editP: function(productObject) {
			var modalInstance = $uibModal.open( {
				templateUrl: "components/dialogs/editProduct.html",
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
				templateUrl: "components/dialogs/addProduct.html",
				controller: "AddProductController"
            });

			return modalInstance.result;
		}
	};
});
