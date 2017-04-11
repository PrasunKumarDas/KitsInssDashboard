'use strict';

angular
    .module('ISS-UI')
    .factory('DashboardService', ['$q','$http',
        function($q, $http) {
            var REST_SERVICE_URI = '/getDashboardData';
            var factory = {
                getDashboardData: getDashboardData
            };
            return factory;
            function getDashboardData() {
                var deferred = $q.defer();
                $http.get(REST_SERVICE_URI)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    },
                    function(errResponse){
                        console.error('Error while fetching Users');
                        deferred.reject(errResponse);
                    }
                );
                return deferred.promise;
            }
            
        }
    ]);
