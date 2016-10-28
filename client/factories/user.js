App.factory('UserFactory', function($http){
	var factory = {};

	factory.addUser = function(newUser){
		return $http.post('/users', newUser)
	}

	factory.getLoggedInUser = function(){
		return $http.get('/users')
	}

	factory.deleteUser = function(id){
		return $http.delete('/users/'+id);
	}

	return factory;
})