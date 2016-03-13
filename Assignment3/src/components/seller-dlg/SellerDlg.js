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
		editP: function() {
			var modalInstance = $uibModal.open( {
				templateUrl: "components/seller-dlgEdit/editProduct.html",
				controller: "SellerDlgEditController"
            });

			return modalInstance.result;
		},
		addP: function() {
			var modalInstance = $uibModal.open( {
				templateUrl: "components/seller-dlgEdit/addProduct.html",
				controller: "SellerDlgEditController"
            });

			return modalInstance.result;
		}
	};
});
