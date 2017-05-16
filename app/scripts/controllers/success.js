'use strict';

/**
 * @ngdoc function
 * @name 2017NewMembersApp.controller:SuccessCtrl
 * @description
 * # SuccessCtrl
 * Controller of the 2017NewMembersApp
 */
angular.module('2017NewMembersApp')
  .controller('SuccessCtrl', function ($scope, $state) {
  	var self = this;
  	self.close = function () {
	    window.opener = null;
	    window.open('', '_self');
	    window.close();
    };
    
  	self.back = function () {
	    $state.go('main');
    };
  	
  	$scope.close = self.close;
  	$scope.back = self.back;
  });
