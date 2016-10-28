App.controller('IndexController', function($scope, QuestionFactory, UserFactory, $location){
	function getLoggedInUser(){
		UserFactory.getLoggedInUser()
		.then(function(serverResponse){
			console.log(serverResponse.data[0].name);
			$scope.loggedInUser = serverResponse.data[0].name;
			$scope.userID = serverResponse.data[0]._id;
		})
		.catch(function(err){
			console.log(err);
		})
	}
	getLoggedInUser();

	function getQuestions(){
		QuestionFactory.getQuestions()
		.then(function(serverResponse){
			console.log(serverResponse.data[0]);
			console.log(serverResponse.data[0].answers.length);
			$scope.questions = serverResponse.data;
			
		})
		.catch(function(err){
			console.log(err);
		})
	}
	getQuestions();

	$scope.deleteUser = function(id){
		UserFactory.deleteUser(id)
		.then(function(serverResponse){
			$location.path('/');
		})
		.catch(function(err){
			console.log(err);
		})
	}

})