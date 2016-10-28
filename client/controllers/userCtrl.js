App.controller('UserController', function($scope, UserFactory, $location){

	$scope.addUser = function(){
		UserFactory.addUser($scope.newUser)
		.then(function(serverResponse){
			$location.path('/index');
		})
		.catch(function(err){
			console.log(err);
		})
	}
})