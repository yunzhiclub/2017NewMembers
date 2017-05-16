'use strict';

/**
 * @ngdoc function
 * @name 2017NewMembersApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 2017NewMembersApp
 */
angular.module('2017NewMembersApp')
.controller('MainCtrl', function ($scope, $http, $location) {
	var self = this;
	self.data = {
		name:'',
		number: '',
		phone:'',
		email:'',
		sex:'男',
		grade:'大一',
		major:'',
		doubleDegree:false,
		classCadre:false,
		communityCadre:false
	};
	
	self.submit = function() {
		$location.path('/success');
		// $http.post('http://www.mengyunzhi.cn:8001//Student/', $scope.data)
		// .then(function success(response) {
		// 	$location.path('/success');
		// });
		
	};
	
	self.getByNumber = function () {
		$http.get('http://www.mengyunzhi.cn:8001/Student/getByNum')
		.then(function success(response) {
			var data = response.data;
			console.log(data);
		});
	};
	
	$scope.data = self.data;
	$scope.submit = self.submit;
	$scope.getByNumber = self.getByNumber;
});
