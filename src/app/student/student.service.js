(function() {
  'use strict';

  angular
    .module('training')
    .service('StudentService', StudentService);

  /** @ngInject */
  function StudentService(){

    var data = [
      {
        id : 1,
        name : 'name',
        surname : 'surname'
      },
      {
        id : 2,
        name : 'name1',
        surname : 'surname1'
      },
      {
        id : 3,
        name : 'name2',
        surname : 'surname2'
      },
      {
        id : 4,
        name : 'name3',
        surname : 'surname3'
      }
    ];
    var maxId = data.length + 1;

    this.list = list;
    this.add = add;
    this.update = update;
    this.get = get;

    function list() {
      return data;
    }

    function add(student){
      student.id = ++maxId;
      data.push(student);
    }

    function update(student){
      var stu = get(student.id);
      stu.name = student.name;
      stu.surname = student.surname;
    }

    function get(id){
      var obj = null;
      angular.forEach(data, function(val){
        if(val.id == id){
          obj = val;
        }
      });
      return obj;
    }
  }
})();
