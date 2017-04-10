'use strict';

angular
    .module('ISS-UI')
    .factory('DashboardService', ['$q',
        function($q) {
            var factory = {
                getDashboardData: getDashboardData
            };

            return factory;
             function getDashboardData() {
               var deferred = $q.defer();
               return deferred.promise;
               console.log('Hi');
            }
        }
    ]);
