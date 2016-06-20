(function() {
  'use strict';

  angular
    .module('training')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/test/:id', {
        templateUrl: 'app/test/test.html',
        controller: 'TestController',
        controllerAs: 'test'
      })
      .when('/students/add', {
        templateUrl: 'app/student/student-add.html',
        controller: 'StudentController',
        controllerAs: 'stu'
      })
      .when('/students/update/:id', {
        templateUrl: 'app/student/student-update.html',
        controller: 'StudentController',
        controllerAs: 'stu'
      })
      .when('/students', {
        templateUrl: 'app/student/student-list.html',
        controller: 'StudentController',
        controllerAs: 'stu'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
