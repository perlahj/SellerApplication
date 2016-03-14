"use strict";

var app = angular.module("project3App").directive('productInfo', function() {
	return {
		restrict: "E",
		scope: {
			info: "="
		},
		templateUrl: "src/components/product/product.html"
	};
});