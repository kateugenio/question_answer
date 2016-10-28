App.factory('AnswerFactory', function($http){
	var factory = {};

	factory.addAnswer = function(newAnswer, qID, user){
		return $http.post('/answers/'+qID+'/'+user, newAnswer)
	}

	factory.like = function(id){
		return $http.put('/answers/'+id)
	}

	return factory;
})