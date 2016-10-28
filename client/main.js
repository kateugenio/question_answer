var App = angular.module('qa', ['ngRoute']);

App.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/partials/_newUser.html',
		controller: 'UserController'
	})
	.when('/index', {
		templateUrl: '/partials/_index.html',
		controller: 'IndexController'
	})
	.when('/new_question', {
		templateUrl: '/partials/_newQuestion.html',
		controller: 'QuestionController'
	})
	.when('/question/:id', {
		templateUrl: '/partials/_showQuestion.html',
		controller: 'QuestionController'
	})
	.when('/question/:id/new_answer', {
		templateUrl: '/partials/_answer.html',
		controller: 'AnswerController'
	})
	.otherwise({
		redirectTo: '/index'
	})
})