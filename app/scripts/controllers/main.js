'use strict';

/**
 * @ngdoc function
 * @name 2017NewMembersApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 2017NewMembersApp
 */
angular.module('2017NewMembersApp')
.controller('MainCtrl', function ($scope, $http) {
	var self = this;
	self.data = {
		name:'',
		phone:'',
		sex:'男',
		grade:'大一',
		major:'',
		isDoubleDegree:false,
		isClassCadre:false,
		isCommunityCadre:false
	};
	
	self.submit = function() {
		//todo :loading
		$http.post('http://www.mengyunzhi.cn:8001', $scope.data)
		.then(function success() {
			//todo: endloading
		});
		
	};
	
	$scope.data = self.data;
	$scope.submit = self.submit;
});
