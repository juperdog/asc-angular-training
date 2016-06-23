(function() {
  'use strict';

  angular
    .module('training')
    .controller('StudentController', StudentController);

  /** @ngInject */
  function StudentController($routeParams, StudentService, $location,$rootScope, $interval) {
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
      $interval(function(){
        StudentService.list().then(function(response){
          //success
          console.log('success',response);
          vm.students = response.data;
        });
      }, 1000);
    }

    function initAdd(){
      vm.student = {
        name : '',
        surname : ''
      };
    }

    function add(){
      StudentService.add(vm.student)
      .then(function(response){
        //sucess added
        gotoList();
      });
      
    }

    function initUpdate(){
      var id = $routeParams.id;
      StudentService.get(id).then(function(response){
        vm.student = response.data;
      });
    }

    function update(){
      StudentService.update(vm.student);
     
    }

    function gotoList(){
      $location.path('/students/');
    }

  }
})();
