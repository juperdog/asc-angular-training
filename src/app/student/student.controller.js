(function() {
  'use strict';

  angular
    .module('training')
    .controller('StudentController', StudentController);

  /** @ngInject */
  function StudentController($routeParams, StudentService, $location) {
    var vm = this;

    //properties
    vm.students = [];
    vm.student = null;

    //method
    vm.initList = initList;
    vm.initAdd = initAdd;
    vm.add = add;
    vm.initUpdate = initUpdate;
    vm.update = update;


    function initList(){
      vm.students = StudentService.list();
    }

    function initAdd(){
      vm.student = {
        name : '',
        surname : ''
      };
    }

    function add(){
      StudentService.add(vm.student);
      gotoList();
    }

    function initUpdate(){
      var id = $routeParams.id;
      vm.student = StudentService.get(id);
    }

    function update(){
      StudentService.update(vm.student);
      gotoList();
    }

    function gotoList(){
      $location.path('/students/');
    }

  }
})();
