'use strict';

/**
 * @ngdoc service
 * @name 2017NewMembersApp.studentSerivce
 * @description
 * # studentSerivce
 * Service in the 2017NewMembersApp.
 */
angular.module('2017NewMembersApp')
.service('studentSerivce', function () {
	var self = this;
	self.student = {
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
	
	self.setStudent = function (student) {
		self.student = student;
	};
	
	self.getStudent = function () {
		return self.student;
	};
	
	return {
		getStudent: self.getStudent,
		setStudent: self.setStudent
	};
});
