"use strict";

angular.module("project3App", ["ngRoute", "ui.bootstrap", "sharedServices", "pascalprecht.translate"])
.config(function ($routeProvider, $translateProvider) {
	$routeProvider.when("/seller", {
		templateUrl: "components/sellers/index.html",
		controller: "SellersController"
	}).when("/seller/:id", {
		templateUrl: "components/seller-details/sellerdetails.html",
		controller: "SellerDetailsController"
	}).otherwise({ redirectTo: "/seller"});


	$translateProvider.useStaticFilesLoader( {
			prefix: "lang_", //gulp/languages.js eru skrar settar saman i lang_
			suffix: ".json"
		});


/*
 	$translateProvider.useStaticFilesLoader( {
 		prefix: "lang_",
      	suffix: ".json"
 	}).fallbackLanguage("en").preferredLanguage("en");

*/
	//$translateProvider.use("is");
});
