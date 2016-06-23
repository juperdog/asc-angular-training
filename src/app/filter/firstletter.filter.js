(function(){
  'use strict';

  angular
    .module('training')
    .filter('firstLetter', firstLetter);

  /** @ngInject */
  function firstLetter(){
    return function(value){
      var output = value.charAt(0).toUpperCase();
      output += value.substr(1, value.length).toLowerCase();
      return output;
    }
  }

})();