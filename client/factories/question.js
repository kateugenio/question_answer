App.factory('QuestionFactory', function($http){
	var factory = {};

	factory.getQuestions = function(){
		return $http.get('/questions')
	}

	factory.addQuestion = function(newQuestion){
		return $http.post('/questions', newQuestion)
	}

	factory.getQuestion = function(id){
		return $http.get('/questions/'+id)
	}

	return factory;
})