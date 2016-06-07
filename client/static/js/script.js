var quoteapp = angular.module('quoteapp', ['ngRoute']);

quoteapp.config(function($routeProvider){
	$routeProvider
		.when('/', {templateUrl: '../partials/all.html'})
		.when('/new', {templateUrl:'../partials/new.html'})
		.otherwise({
			redirectTo: '/'
		});
})

quoteapp.factory('quotefactory', function(){
	var factory = {};
	factory.get_all = function(callback, data){
		quotes = data;
		callback(quotes);
	}
	factory.add = function(data){
		quotes.push(data);
	}
	return factory
})

quoteapp.controller('quotecontroller', function($scope, quotefactory){
	$scope.quotes = [];
	$scope.quote = {};

	quotefactory.get_all(function(data){
		$scope.quotes = data;
	})

	$scope.add = function(){
		console.log($scope.newquote)
		// quotefactory.add(newquote);

		$scope.newquote = null;
	}
})
