"use strict";

var app = angular.module("project3App", ["ngRoute", "ui.bootstrap", "sharedServices", "pascalprecht.translate"]);
app.config(function ($routeProvider, $translateProvider) {
	$routeProvider.when("/sellers", {
		templateUrl: "components/sellers/index.html",
		controller: "SellersController"
	}).when("/seller/:id", {
		templateUrl: "components/seller-details/sellerdetails.html",
		controller: "SellerDetailsController"
	}).otherwise({ redirectTo: "/sellers"});


	$translateProvider.preferredLanguage("is");
	$translateProvider.useStaticFilesLoader( {
			prefix: "lang_", //gulp/languages.js eru skrar settar saman i lang_
			suffix: ".json"
		});

	$translateProvider.useSanitizeValueStrategy("escape");	
	$translateProvider.fallbackLanguage("is");


	
});
