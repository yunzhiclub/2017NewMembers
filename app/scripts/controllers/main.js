'use strict';

/**
 * @ngdoc function
 * @name 2017NewMembersApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 2017NewMembersApp
 */
angular.module('2017NewMembersApp')
.controller('MainCtrl', function ($scope) {
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
	
	};
	
	$scope.data = self.data;
	$scope.submit = self.submit;
});
