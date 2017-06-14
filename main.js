// Apps

var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider, $locationProvider){
	$routeProvider.
		
		when('/developers', {
			templateUrl: 'dev.html',
			 controller: 'DevCtrl'
		}).
		
		when('/designers', {
			templateUrl: 'design.html',
			controller: 'DesignCtrl'
		}).
		
		otherwise({ redirectTo: '/index' });
	//$locationProvider.html5Mode(true);
});




//Controllers

app.controller('MainController', function($scope) {
	$scope.text = "Hello World!!!!";
});

app.controller('DevCtrl', function($scope) {
	$scope.developers = [
	    {"name":"John", "family":"Doe"}, 
	    {"name":"Anna", "family":"Smith"},
	    {"name":"Peter", "family":"Jones"},
	    {"name":"Alex", "family":"Volkov"}, 
	    {"name":"Yaniv", "family":"Smith"},
	]
});

app.controller('DesignCtrl', function($scope) {
	$scope.designers = [
	    {"name":"Inna", "family":"Doe"}, 
	    {"name":"Anna", "family":"Smith"},
	    {"name":"Yafit", "family":"Jones"}
	]
});