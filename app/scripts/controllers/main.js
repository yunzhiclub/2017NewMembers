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
	
	// 初始化默认非法按钮
	self.initSubmitDisabledClass = function (callback) {
		callback('weui-btn_disabled');
	};
	
	// 获取学生信息，并且将电话号码进行转换
	self.data = studentSerivce.getStudent();
	if (typeof(self.data.phone) === 'string') {
		self.data.phone = parseInt(self.data.phone);
	}
	
	// 如果提交按钮生效，则进行数据提交
	self.submit = function () {
		if ($scope.submitDisabledClass === '') {
			$http.post('http://www.mengyunzhi.cn:8001/Student/', $scope.data)
			.then(function success(response) {
				studentSerivce.setStudent(response.data);
				$location.path('/success');
			});
		}
	};
	
	// 通过学号获取学生信息
	self.getByNumber = function () {
		$http.get('http://www.mengyunzhi.cn:8001/Student/getByNumber')
		.then(function success(response) {
			var data = response.data;
			console.log(data);
		});
	};
	
	// 监听前台data变化，确定是否激活提交按钮
	$scope.$watchCollection('data', function () {
		if ($scope.data.name && $scope.data.number && $scope.data.phone && $scope.data.email && $scope.data.major) {
			$scope.submitDisabledClass = '';
		} else {
			self.initSubmitDisabledClass(function (className) {
				$scope.submitDisabledClass = className;
			});
		}
	});
	
	// 初始化V层信息
	$scope.submitDisabledClass = '';
	self.initSubmitDisabledClass(function (className) {
		$scope.submitDisabledClass = className;
	});
	$scope.data = self.data;
	$scope.submit = self.submit;
	$scope.getByNumber = self.getByNumber;
});
