/**
 * Created by panjie on 17/5/16.
 */
'use strict';

function configState($stateProvider, $urlRouterProvider, $compileProvider) {
	
	
	// Optimize load start with remove binding information inside the DOM element
	$compileProvider.debugInfoEnabled(true);
	
	// Set default state
	$urlRouterProvider.otherwise('/');
	$stateProvider
	
	// 仪表台 -- 首页
	.state('main', {
		url: '/',
		templateUrl: 'views/main.html',
		cache:true,
		data: {
			pageTitle: '首页'
		}
	})
	
	// 大数据平台
	.state('success', {
		url: '/success',
		templateUrl: 'views/success.html',
		data: {
			pageTitle: '操作成功'
		}
	});
}

angular
.module('2017NewMembersApp')
.config(configState);

console.log('hi');

