(function() {
    'use strict';
    angular
        .module('ISS-UI')
        .controller('DashboardController', ['DashboardService', '$interval',
            function(DashboardService, $interval) {
                var vm = this;
                init();

                function init() {
                    var theInterval = $interval(function() {
                        loadNotifications();
                    }.bind(this), 10000000);
                    loadNotifications();
                    loadChart();
                }

                function loadNotifications() {
                    DashboardService.getDashboardData()
                        .then(function(response) {
                            vm.tillInformation = response.tillHeartBeatReport;
                        })
                }

                function loadChart(chartData) {
                    vm.chartConfig = {
                        title: {
                            text: 'Weekly Heartbeat'
                        },
                        series: [{
                            type: 'pie',
                            data: [{
                                name: 'Dead',
                                y: 10
                            }, {
                                name: 'Alive',
                                y: 80,
                                selected: true
                            }, {
                                name: 'P',
                                y: 10
                            }]
                        }]
                    };
                }

            }
        ]);
})();