"use strict";

describe("SellerDlgController", function() {
	beforeEach(module("project3App"));
	var scope, ctrl;

	var mockFormValid = true;

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

		// A sample test
		it("should return true", function(){
			expect(mockFormValid).toBe(true);
		});
	});
});