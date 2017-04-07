(function() {
    'use strict';
    angular
        .module('ISS-UI', [
            'ui.router',
            'home'   
        ])
        .config(['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {
                $stateProvider
                    .state('home', {
                        url: '/home',
                        templateUrl: 'views/home.view.html',
                        controller: 'HomeController as home',
                        params: {
                            returnTo: null,
                            returnToParams: null
                        }
                    })
                    
                $urlRouterProvider.otherwise('/');
            }
        ])
 }());