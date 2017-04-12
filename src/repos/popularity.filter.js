(function() {
    'use strict';

    angular.module('gh')
        .filter('popularity', popularity);

    function popularity() {

        /**
         * Takes the object data and stores it inside an array that can be sorted
         * with the sort method.
         * @param  {Object} repo object data from the api
         * @return {Number}      returns eith a -1, 1, or 0
         */
        return function popularMath(repo) {
            let copyRepo = [].concat(repo);

            if (!Array.isArray(repo)) {
                return repo;
            }

            return copyRepo.sort(function sort(a, b) {
                let copyA = (a.stargazers_count) + (2 * a.forks_count) + (a.open_issues_count / 2);
                let copyB = (b.stargazers_count) + (2 * b.forks_count )+ (b.open_issues_count / 2);

                return copyA - copyB;

            });

        };
    }

}());
