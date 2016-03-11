"use strict";

describe("SellerDlgController", function() {
	beforeEach(module("project3App"));
	var scope, ctrl;
	var mockFormValid = scope.addForm.valid;
	var mockFormInValid = false;

	describe('', function() {
		beforeEach(module('pascalprecht.translate', function($translateProvider) {
			$translateProvider.translations('is', {
				"seller": "seljandi"
			});
			$translateProvider.translations('es', {
				"seller": "seller"
			});
			$translateProvider.preferredLanguage('is');
		}));

		beforeEach(inject(function($controller, $rootScope, $translate) {
			scope = $rootScope.$new();
			ctrl = $controller("SellerDlgController", {
				$scope: scope
			});
		}));

		it("should call $scope.close() if the form is valid", function() {
			var addForm = mockFormValid;
			scope.onSubmit();
			expect(scope.close).toHaveBeenCalled();
		});

		it("should return true", function(){
			expect(mockFormValid).toBe(true);
		})
	});
});