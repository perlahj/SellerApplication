//Put .directive here

"use strict";

var app = angular.module("project3App").directive('productInfo', function() {
  return {
  	restrict: "E",
	templateUrl:  "src/components/product/product.html"
  };
});