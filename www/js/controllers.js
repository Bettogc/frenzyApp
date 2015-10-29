// ****************************************************
angular.module('starter.controllers', ['ionic'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicPopover) {
	// Form data for the login modal
	$scope.loginData = {};

	$scope.closeLogin = function() {
		$scope.modal.hide();
	};
	// Open the login modal
	$scope.login = function() {
		$scope.modal.show();
	};
	// Perform the login action when the user submits the login form
	$scope.doLogin = function() {
		// Simulate a login delay. Removee this and replace with your login code if using a login system
		$timeout(function() {
			$scope.closeLogin();
		}, 1000);
	};
})   
//*********************  POPOVER  ******************************
.controller('PopoverCtrl', function($scope, $ionicPopover) {
	$ionicPopover.fromTemplateUrl('templates/popover.html', {
		scope: $scope,
	}).then(function(popover) {
		$scope.popover = popover;
		$scope.message = 'hello';
	});
})

.controller('PopoverNewCtrl', function($scope, $ionicPopover) {
	$ionicPopover.fromTemplateUrl('templates/popoverNew.html', {
		scope: $scope,
	}).then(function(popover) {
		$scope.popover = popover;
		$scope.message = 'cheers';
	});
})
// ******* PLAYLIST CONTROLLER OBJETS *******
.controller('PlaylistsCtrl', function($scope) {
	$scope.playlists = [{
		title: 'Supermercado',
		icon: 'E',
		id: 'supermercado'
	}, {
		title: 'Restaurantes',
		icon: 'F',
		id: 'restaurantes'
	}, {
		title: 'Moda',
		icon: 'G',
		id: 'moda'
	}, {
		title: 'Entretenimiento',
		icon: 'H',
		id: 'entretenimiento'
	}, {
		title: 'Electrónicos',
		icon: 'I',
		id: 'electronicos'
	}, {
		title: 'Otros',
		icon: 'J',
		id: 'otros'
	}];
})
// ********************************************************
.controller('Supermercado', function($scope) {
  $scope.playlists = [{
	title: 'La TorreL',
	id: 'supermer'
  }, {
	title: 'wallmart',
	id: 'restaurantes'
  }, {
	title: 'paiz',
	id: 'centro'
  }];
})

.controller('Supermer', function($scope) {
	$scope.playlists = [{
	  title: 'La Torre 2*1',
	  id: '2x1'
	}, {
	  title: 'la torre -20%',
	  id: '20'
	}, {
	  title: 'la torre platos',
	  id: 'platos'
	}];
  })
  //********************************************************
  //********************************************************


.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
	$scope.chats = Chats.all();
})
// ********************* CUPON CONTROLLER *********************
.controller('CuponCtrl', function($scope, $stateParams ,Cupons) {
	$scope.$on('$ionicView.enter', function() {
		$scope.cupons = Cupons.all($stateParams.CuponID);
		$scope.heartMenu = "silver";
		$scope.ConteoPro = ContPromo

		$scope.heartPopover = function(id){
			var favorite = new Parse.Query('Favorite');
			favorite.equalTo("UserID", IdUsuario);
			favorite.equalTo("CustomerID", id);
			favorite.find({
				success: function(results) {
					if ( results.length > 0 ) {
						$scope.heartMenu = "red";
					}
				},
				error: function(myObject, error) {
					// Error occureds
					console.log( error );
				}
			});
		}
	});
})
// ********************* CUPON DESCRIPTION CONTROLLER *********************
.controller('DescriptionCuponCtrl', function($scope, $stateParams ,DescriptionCupons) {
	$scope.cupons = DescriptionCupons.all($stateParams.DescriptionID);
})
// ********* SUPERMARKET CONTROLLER *********
.controller('SupermercadoCtrl', function($scope, Supermercados) {
	var dimensions = {
		name: 'supermarketMenu'
	};
	Parse.Analytics.track("view", dimensions);

	$scope.chats = Supermercados.all();
})
// ********* RESTAURANTS CONTROLLER *********
.controller('RestaurantesCtrl', function($scope, Restaurantes) {
	var dimensions = {
		name: 'restaurantMenu'
	};
	Parse.Analytics.track("view", dimensions);

	$scope.chats = Restaurantes.all();
})
// ********* FASION CONTROLLER *********
.controller('ModaCtrl', function($scope, Moda) {
	var dimensions = {
		name: 'fashionMenu'
	};
	Parse.Analytics.track("view", dimensions);

	$scope.chats = Moda.all();
})
// ********* ENTERTAINMENT CONTROLLER *********
.controller('EntretenimientoCtrl', function($scope, Entretenimiento) {
	var dimensions = {
		name: 'entertainmentMenu'
	};
	Parse.Analytics.track("view", dimensions);

	$scope.chats = Entretenimiento.all();
})
// ********* ELECTRONICS CONTROLLER *********
.controller('ElectronicosCtrl', function($scope, Electronicos) {
	var dimensions = {
		name: 'electronicsMenu'
	};
	Parse.Analytics.track("view", dimensions);

	$scope.chats = Electronicos.all();
})
// ********* OTHERS CONTROLLER *********
.controller('OtrosCtrl', function($scope, Otros) {
	var dimensions = {
		name: 'othersMenu'
	};
	Parse.Analytics.track("view", dimensions);

	$scope.chats = Otros.all();
})
// ********* CATEGORY CONTROLLER *********
.controller('CategoryCtrl', function($scope, Categorys) {
	var dimensions = {
		name: 'categoriesMenu'
	};
	Parse.Analytics.track("view", dimensions);

	$scope.categorys = Categorys.all();
})
// ***************************  PAIZ CONTROLLER  ***************************
.controller('PaizCtrl', function($scope, $stateParams, Paiz) {
	var dimensions = {
		name: $stateParams.superId,
	};

	Parse.Analytics.track("view", dimensions);
	$scope.$on('$ionicView.enter', function() {
		$scope.chats = Paiz.get($stateParams.superId);
		$scope.popover = Paiz.all($stateParams.superId);
		$scope.heartMenu = "silver";
		$scope.Cupcon = Cupcont.length

		$scope.heartPopover = function(id){
			var favorite = new Parse.Query('Favorite');
			favorite.equalTo("UserID", IdUsuario);
			favorite.equalTo("CustomerID", id);
			favorite.find({
				success: function(results) {
					if ( results.length > 0 ) {
						$scope.heartMenu = "red";
					}
				},
				error: function(myObject, error) {
					// Error occureds
					console.log( error );
				}
			});
		}
	});
})
// *************************** CHAT DETAIL CONTROLLER ***************************
.controller('ChatDetailCtrl', function($scope, $stateParams, Categorys) {
	$scope.chat = Categorys.get($stateParams.chatId);
})
// *************************** OUR FAVORITES CONTROLLER ***************************
.controller('OurfavoritesCtrl', function($scope, OurFavorites) {
	var dimensions = {
		name: 'frenzyFavorites',
	};
	Parse.Analytics.track("view", dimensions);
	$scope.ourFavorites = OurFavorites.all();
})
// *************************** ALL FAVORITE CONTROLLER ***************************
.controller('AllFavoriteCtrl', function($scope, $stateParams, AllFavorite) {
	var dimensions = {
		name: 'userFavorites',
	};
	Parse.Analytics.track("view", dimensions);

	$scope.$on('$ionicView.enter', function() {
		$scope.chats = AllFavorite.all();
	});
	$scope.getAllFavorites = function() {};
	})
// *************************** ALL PROMOTION ***************************
.controller('AllPromotionCtrl', function($scope, $stateParams, AllPromotion) {
	var dimensions = {
		name: 'allPromotions',
	};
	Parse.Analytics.track("view", dimensions);

	$scope.$on('$ionicView.enter', function() {
		$scope.chats = AllPromotion.all($stateParams.salvadosId);
	});
})
// *************************** ACCOUNT CONTROLLER ***************************
.controller('AccountCtrl', function($scope) {
	var dimensions = {
		name: 'settings',
	};
	Parse.Analytics.track("view", dimensions);

	$scope.settings = {
		enableFriends: true
	};
});