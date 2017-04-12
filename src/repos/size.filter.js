(function() {
    'use strict';

    angular.module('gh')
        .filter('size', size);

    function size() {

        /**
         * Take repo data in as a number and retruns it divided by 1000. I then applies the
         * toFixed method with to determine the length
         * @param  {Number} repo Number data pulled from the repo
         * @return {Number}      
         */
        return function doSizeMath(repo) {

            let newSize = repo / 1000;
            return newSize.toFixed(2) + ' MBs';
        };
    }

}());
