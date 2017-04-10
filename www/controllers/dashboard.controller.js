(function() {
    'use strict';
    angular
        .module('ISS-UI')
        .controller('DashboardController', ['DashboardService',
            function(DashboardService) {
                var vm = this;
                init();
                function init() {
                	DashboardService.getDashboardData()
                    .then(function(response){
                    	console.log('Hiiii');
                    })
             	}
               
            }
        ]);
})();