(function() {
    'use strict';
    angular
        .module('home',[])
        .controller('HomeController', [
            function() {
                var vm = this;
                init();
                function init() {
                    vm.title = 'Hello World';
             	}
               
            }
        ]);
})();