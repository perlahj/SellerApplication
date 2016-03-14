//Put .directive here

"use strict";

var app = angular.module("project3App").directive('productInfo', function() {
	return {
		restrict: "E",
		scope: {
			info: "="
		},
		/*link: function(scope, element, attrs) {
			scope.$watch("info", function(v, w) {
				console.log('value ' + v.name +  'new value is: ' + w.name);
			});
		},*/ 
		templateUrl: "src/components/product/product.html"
	};
});