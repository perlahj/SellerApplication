"use strict";

/**
 * This module serves as the main resource object for our app, i.e.
 * the object which connects to our REST backend and loads/saves data.
 */
angular.module("project3App").factory("AppResource",
function AppResource() {

	// A helper function to create a seller object.
	// Note that this is only a helper to generate
	// mock data, and is not a part of our business logic!
	function createSeller(id, name, category, img) {
		return {
			id: id,
			name: name,
			category: category,
			imagePath: img
		};
	}

	// Another helper function.
	function createProduct(sellerid, id, productName, productCategory, price, quantitySold, quantityInStock, path) {
		return {
			id: sellerid,
			product: {
				id: id,
				name: productName,
				category: productCategory,
				price: price,
				quantitySold: quantitySold,
				quantityInStock: quantityInStock,
				imagePath: path
			}
		};
	}

	// Out mock data. Note that this is just to help us
	// during development!
	var mockSellers = [
		createSeller(1, "Hannyrðaþjónusta Hannesar", "Fatnaður", "http://i.imgur.com/OYVpe2W.jpg?fb"),
		createSeller(2, "Smíðaverkstæði Sigríðar", "Skartgripir", "https://i.imgur.com/ywaPivVh.jpg"),
		createSeller(3, "Sælgætisgerð Sjonna og Súsí", "Matvörur", "http://i.imgur.com/IuL474x.jpg"),
		createSeller(4, "Leirkeraverkstæði Lomma", "Keramik", "https://upload.wikimedia.org/wikipedia/commons/6/67/Potter_at_work,_Jaura,_India.jpg")
	];

	var nextID = 5;

	var mockProducts = [
		createProduct(1,  1, "Ullarvettlingar", "Fatnaður", 1899, 500, 12, "http://i.imgur.com/MZOmRnH.jpg"),
		createProduct(1,  2, "Ullarsokkar","Fatnaður",      2199, 488,  9, "http://i.imgur.com/0XKznD4.jpg?1"),
		createProduct(1,  3, "Trefill", "Fatnaður",          999, 600, 23, "http://i.imgur.com/50ivFlC.jpg"),
		createProduct(1,  4, "Sjal", "Fatnaður",            2399, 120, 65, "https://farm6.static.flickr.com/5205/5298302908_fb75ed8e0a.jpg"),
		createProduct(1,  5, "Húfa", "Fatnaður",            1799, 700, 11, "http://purnahandmade.com/media/catalog/product/cache/1/image/ab49223884317513dca074f3bc642368/p/h/phc_malle_08_orwh.jpg"),
		createProduct(1,  6, "Bjórvettlingar", "Fatnaður",  2649,  12, 99, "https://img1.etsystatic.com/050/1/5847299/il_214x170.730058347_mt4x.jpg"),
		createProduct(1,  7, "Jakki", "Fatnaður",           4499,  23, 14, "http://www.newmanmayahandicraft.com.np/wp-content/uploads/2015/10/woolen-jacket-with-multicolored-design.jpg"),
		createProduct(1,  8, "Peysa", "Fatnaður",           5899, 122,  1, "https://upload.wikimedia.org/wikipedia/commons/7/75/Selburose-sweater.jpg"),
		createProduct(1,  9, "Lambhúshetta", "Fatnaður",    2499, 322,  4, "https://upload.wikimedia.org/wikipedia/commons/9/9a/Balaclava_3_hole_black.jpg"),
		createProduct(1, 10, "Buxur", "Fatnaður",           4299,  73,  5, ""),
		createProduct(1, 11, "Grifflur", "Fatnaður",        1299,  98,  9, ""),
		createProduct(1, 12, "Teppi", "Fatnaður",            499, 819, 98, "https://pixabay.com/static/uploads/photo/2015/11/07/14/40/fabric-1031932_960_720.jpg"),
		createProduct(1, 13, "Sokkar", "Fatnaður",           499, 991, 23, "https://upload.wikimedia.org/wikipedia/commons/4/42/HandKnittedWhiteLaceSock.jpg"),
		createProduct(1, 14, "Bindi", "Fatnaður",            899,  25, 22, ""),
		createProduct(1, 15, "Slaufa", "Fatnaður",           499, 552, 54, "https://pixabay.com/static/uploads/photo/2015/04/20/21/39/bow-tie-732289_960_720.jpg"),
		createProduct(1, 16, "Hnéháir sokkar", "Fatnaður",   2499,  93, 42, "https://upload.wikimedia.org/wikipedia/commons/c/cf/Argyle_(PSF).png"),
		createProduct(1, 17, "Barnatrefill", "Fatnaður",     999,  39, 11, "https://upload.wikimedia.org/wikipedia/commons/a/a4/Well-clothed_baby.jpg"),
		createProduct(1, 18, "Hneppt peysa", "Fatnaður",    4499,  19,  9, "https://upload.wikimedia.org/wikipedia/commons/4/4d/1940_Trachtenstrickjacke_anagoria.JPG"),
		createProduct(1, 19, "Hvítir vettlingar","Fatnaður", 499, 241,  0, "https://pixabay.com/static/uploads/photo/2014/05/05/22/15/gloves-338614_960_720.jpg"),
		createProduct(1, 20, "Úlnliðshlífar", "Fatnaður",    1499,  34,  0, "https://pixabay.com/static/uploads/photo/2015/11/07/17/20/hands-1032312_960_720.jpg"),
		createProduct(3, 21, "Kókoskúlur", "Fatnaður",        499, 100, 5000, "https://upload.wikimedia.org/wikipedia/commons/2/2c/Chokladbollar.jpg"),
		createProduct(3, 22, "Brjóstsykur", "Fatnaður",       499, 200, 4900, ""),
	];
	// Note: sellers 2 and 4 don't have any products - yet!
	var nextPID = 23;
	// A helper object which emulates the return value
	// from the $http service in Angular.
	var mockHttpPromise = function(condition, data) {
		return {
			success: function(fn) {
				if (condition) {
					fn(data);
				}
				return {
					error: function (f) {
						if (!condition) {
							f();
						}
					}
				};
			}
		};
	};

	var mockResource = {
		// Note: the following properties should NOT be used
		// in production code, but can be used in unit testing
		// code to tell this resource to behave in a certain way!
		successLoadSellers:         true,
		successAddSeller:           true,
		successUpdateSeller:        true,
		successLoadSellerDetails:   true,
		successGetSellerProducts:   true,
		successAddSellerProduct:    true,
		successUpdateSellerProduct: true,
		successUpdateProduct: 		true,

		// Below are the real functions this object should support.
		// The current implementation is of course just a mock
		// implementation, which returns the hardcoded data
		// defined above. A proper implementation will talk to
		// an API to load/save data.
		getSellers: function getSellers() {
			return mockHttpPromise(mockResource.successLoadSellers, mockSellers);
		},

		addSeller: function addSeller(seller) {
			if (mockResource.successAddSeller) {
				seller.id = nextID++;
				mockSellers.push(seller);
			}
			return mockHttpPromise(mockResource.successAddSeller, seller);
		},

		defaultSellerPicturePath : "https://pixabay.com/static/uploads/photo/2013/07/13/11/53/best-seller-158885_960_720.png",

		updateSeller: function(id, seller) {
			if (mockResource.successUpdateSeller) {
				var current = mockSellers[id-1];
				if (current !== null) {
					current.name      = seller.name;
					current.category  = seller.category;
					current.imagePath = seller.imagePath;
				}
			}
			return mockHttpPromise(mockResource.successUpdateSeller, seller);
		},

		updateSellerOld: function(id, seller) {
			if (mockResource.successUpdateSeller) {
				var current = _.find(mockSellers, function(o){ return o.id === id;});
				if (current !== null) {
					current.name      = seller.name;
					current.category  = seller.category;
					current.imagePath = seller.imagePath;
				}
			}
			return mockHttpPromise(mockResource.successUpdateSeller, seller);
		},

		getSellerDetails: function(id) {
			var seller;
			if(id < nextID && id > 0){
				seller = mockSellers[id-1];
			}
			if (seller) {
				return mockHttpPromise(mockResource.successLoadSellerDetails, seller);
			} else {
				return mockHttpPromise(false, null);
			}
		},

		getSellerDetailsOld: function(id) {
			var seller;
			for (var i = 0; i < mockSellers.length; ++i) {
				if (mockSellers[i].id === id) {
					seller = mockSellers[i];
					break;
				}
			}

			if (seller) {
				return mockHttpPromise(mockResource.successLoadSellerDetails, seller);
			} else {
				return mockHttpPromise(false, null);
			}
		},

		//changed id to parseInt(id)
		getSellerProducts: function getSellerProducts(id) {
			var products = [];
			for (var i = 0; i < mockProducts.length; ++i) {
				if (mockProducts[i].id === parseInt(id)) {
					products.push(mockProducts[i].product);
				}
			}

			return mockHttpPromise(mockResource.successGetSellerProducts, products);
		},

		getSellerTopProducts: function getSellerTopProducts(id) {
			var products = [];
			for (var i = 0; i < mockProducts.length; ++i) {
				if (mockProducts[i].id === parseInt(id)) {
					products.push(mockProducts[i].product);
				}
			}

			return mockHttpPromise(mockResource.successGetSellerProducts, products);
		},

		addSellerProduct: function addSellerProduct(id, product) {
			var success = false;
			if (mockResource.successAddSellerProduct) {
				var seller = mockSellers[id-1];
				if (seller) {
					success = true;
					product.id = nextPID++;
					mockProducts.push({
						id: seller.id,
						product: product
					});
				}
			}

			return mockHttpPromise(success, product);
		},

		addSellerProductOld: function addSellerProduct(id, product) {
			var success = false;
			if (mockResource.successAddSellerProduct) {
				var seller = _.find(mockSellers, function(o){ return o.id === id;});
				if (seller) {
					success = true;
					product.id = nextPID++;
					mockProducts.push({
						id: seller.id,
						product: product
					});
				}
			}

			return mockHttpPromise(success, product);
		},

		// TODO: the updateProduct() function is left as an exercise to
		updateProduct: function(id, product) {
			if (mockResource.successUpdateProduct) {
				var current = mockProducts[id-1];
				if (current !== null) {
					current.name      = product.name;
					current.category = product.category;
					current.price  = product.category;
					current.quantitySold  = product.quantitySold;
					current.quantityInStock = product.quantityInStock;
					current.imagePath = product.imagePath;
				}
			}
			return mockHttpPromise(mockResource.successUpdateProduct, product);
		}
			// the reader...
	};

	return mockResource;
});