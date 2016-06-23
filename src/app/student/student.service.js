(function() {
  'use strict';

  angular
    .module('training')
    .service('StudentService', StudentService);

  /** @ngInject */
  function StudentService($http){
    var host = 'http://172.23.249.139:8088';


    this.list = list;
    this.add = add;
    this.update = update;
    this.get = get;

    function list() {
     
      return $http.get(host+'/students');
    }

    function add(student){
      return $http.post(host+'/students',student);
    }

    function update(student){
      var stu = get(student.id);
      stu.name = student.name;
      stu.surname = student.surname;
    }

    function get(id){
      return $http.get(host+'/students/'+id);
    }
  }
})();
