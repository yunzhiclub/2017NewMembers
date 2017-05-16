'use strict';

/**
 * @ngdoc function
 * @name 2017NewMembersApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 2017NewMembersApp
 */
angular.module('2017NewMembersApp')
.controller('MainCtrl', function ($scope, $http, $location, studentSerivce) {
	var self = this;
	self.data = studentSerivce.getStudent();
	typeof(self.data.phone) === 'string' ? self.data.phone = parseInt(self.data.phone) : true;
	
	self.submit = function() {
		$http.post('http://www.mengyunzhi.cn:8001/Student/', $scope.data)
		.then(function success(response) {
			studentSerivce.setStudent(response.data);
			$location.path('/success');
		});
		
	};
	
	self.getByNumber = function () {
		$http.get('http://www.mengyunzhi.cn:8001/Student/getByNumber')
		.then(function success(response) {
			var data = response.data;
			console.log(data);
		});
	};
	
	$scope.data = self.data;
	$scope.submit = self.submit;
	$scope.getByNumber = self.getByNumber;
});
