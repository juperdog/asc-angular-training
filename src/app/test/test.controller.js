(function() {
  'use strict';

  angular
    .module('training')
    .controller('TestController', TestController);

  /** @ngInject */
  function TestController($timeout, webDevTec, toastr, $routeParams) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1465099832267;
    vm.showToastr = showToastr;
    vm.ssid = $routeParams.id;console.log('id', vm.ssid);
    vm.ss = 'adsdass';

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
