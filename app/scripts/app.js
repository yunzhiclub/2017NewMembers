'use strict';

/**
 * @ngdoc overview
 * @name 2017NewMembersApp
 * @description
 * # 2017NewMembersApp
 *
 * Main module of the application.
 */
angular
.module('2017NewMembersApp', [
	'ngAnimate',
	'ui.router',                // Angular flexible routing'
	'angular-loading-bar'       // loading-bar
])
.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
	cfpLoadingBarProvider.spinnerTemplate = '<div id="loadingToast" ng-show=""><div class="weui-mask_transparent"></div><div class="weui-toast"><i class="weui-loading weui-icon_toast"></i><p class="weui-toast__content">数据加载中</p></div></div>';
}]);
