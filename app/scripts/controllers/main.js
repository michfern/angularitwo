'use strict';

/**
 *	Playing with AngularJS
 *	tutorials and random playtime
 **/
//	Services
playground.factory('Data', function() {
	return {
		message: "I'm data from a service",
	}
});
//	Controllers
playground.controller('MsgCtrl', function($scope, Data) {
	$scope.data = Data;
	$scope.reversify = function(message) {
		if(message) {
			return message.split('').reverse().join('') + ' - via method';
		}
	}
});
playground.controller('SearchCtrl', function($scope, $http) {
	$scope.searchfilters = [
		{option:'all', type:'search'},
		{option:'by name', type:'search.name'},
		{option:'by type', type:'search.type'},
		{option:'by id', type:'search.id'},
		{option:'by moves', type:'search.moves'}
	];
	$scope.filteroptions = $scope.searchfilters[0]; //default All
	$http
		.get('json/pokes.json')
		.then(function(res) {
			$scope.pokes = res.data;
		})
});