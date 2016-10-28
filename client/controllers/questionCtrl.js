App.controller('QuestionController', function($scope, QuestionFactory, AnswerFactory, UserFactory, $location, $routeParams){


	$scope.addQuestion = function(){
		QuestionFactory.addQuestion($scope.newQuestion)
		.then(function(serverResponse){
			console.log(serverResponse);
			if (serverResponse.data.errors){
				$scope.error = "Question must be 10 characters minimum";
			}
			else {
				$location.path('/index');
			}
		})
		.catch(function(err){
			console.log(err);
		})
	}

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

	function getQuestion(){
		console.log($routeParams.id);
		QuestionFactory.getQuestion($routeParams.id)
		.then(function(serverResponse){
			$scope.questions = serverResponse.data;
		})
		.catch(function(err){
			console.log(err);
		})
	}
	getQuestion();

	$scope.like = function(id){
		AnswerFactory.like(id)
		.then(function(serverResponse){
			getQuestion();
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