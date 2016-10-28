App.controller('AnswerController', function($scope, QuestionFactory, AnswerFactory, UserFactory, $routeParams, $location){
	function getQuestion(){
		QuestionFactory.getQuestion($routeParams.id)
		.then(function(serverResponse){
			$scope.questions = serverResponse.data;
		})
		.catch(function(err){
			console.log(err);
		})
	}
	getQuestion();

	function getLoggedInUser(){
		UserFactory.getLoggedInUser()
		.then(function(serverResponse){
			$scope.loggedInUser = serverResponse.data[0].name;
			$scope.userID = serverResponse.data[0]._id
		})
		.catch(function(err){
			console.log(err);
		})
	}
	getLoggedInUser();

	$scope.addAnswer = function(questionID, user){
		console.log($scope.newAnswer);
		AnswerFactory.addAnswer($scope.newAnswer, questionID, user)
		.then(function(serverResponse){
			console.log(serverResponse);
			if (serverResponse.data.errors){
				$scope.error = "Answer must be at least 5 characters";
			}
			else {
				console.log(serverResponse.data);
				$location.path('/question/'+$routeParams.id);
			}
		})
		.catch(function(err){
			console.log(err);
		})
	}

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