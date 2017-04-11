(function() {
  'use strict';

  angular.module('gh')
      .filter('megabyte', megabyte);

      function megabyte(){

        return function doMegaMath(repo){

          let newSize = repo / 1024;
          return newSize.toFixed(2)+ ' MBs';
      };
    }

}());
