(function() {
    'use strict';
    angular
        .module('ISS-UI', [
            'ui.router' 
        ])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
            function($stateProvider, $urlRouterProvider, $locationProvider) {
            	
                $stateProvider
                    .state('dashboard', {
                        url: '/dashboard',
                        templateUrl: 'views/dashboard.view.html',
                        controller: 'DashboardController as dashboard',
                        params: {
                            returnTo: null,
                            returnToParams: null
                        }
                    })
                    
                $urlRouterProvider.otherwise('/dashboard');
               
            }
        ])
 }());