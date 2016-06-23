(function() {
  'use strict';

  angular
    .module('training')
    .directive('studentInfo', function(StudentService){

      return {
        restrict: 'E',
        scope: {
          oddRow : '@', //@ -> @oddRow
          evenRow : '@even',
          sortField : '@',
          sortOrder : '@'
        },
        templateUrl: 'app/student/student-info.html',
        link: function($scope, element, attrs){

          $scope.sort = $scope.sortField;
          if($scope.sortOrder.toLowerCase() === 'asc')
            $scope.sort = $scope.sort;
          else if($scope.sortOrder.toLowerCase() === 'desc')
            $scope.sort = '-'+$scope.sort;
          console.log($scope.sort);

          StudentService.list().then(function(res){
            $scope.sts = res.data;
            console.log($scope.sts);
          });

        }
      }
    });

})();