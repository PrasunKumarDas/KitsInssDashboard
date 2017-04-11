(function() {
    'use strict';
    angular
        .module('ISS-UI')
        .controller('DashboardController', ['DashboardService','$interval',
            function(DashboardService, $interval) {
                var vm = this;
                init();
                function init() {
					 var theInterval = $interval(function(){
					     loadNotifications();
					   }.bind(this), 1000);    
				    loadNotifications();
                      vm.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
                        vm.data = [300, 500, 100];
                	
             	}
             	function loadNotifications(){
             		DashboardService.getDashboardData()
		            .then(function(response){
		                vm.tillInformation = response.tillHeartBeatReport;
		            })
             	}
               
            }
        ]);
})();