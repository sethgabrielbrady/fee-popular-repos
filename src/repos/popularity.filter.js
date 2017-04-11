(function() {
    'use strict';

    angular.module('gh')
        .filter('popularity', popularity);

    function popularity() {

        return function popularMath(repo) {
            if (!Array.isArray(repo)) {
                return repo;
            }

            let copyRepo = [].concat(repo);

            return copyRepo.sort(function sort(a, b) {

                let copyA = a.stargazers_count + 2 * a.forks_count + a.open_issues_count / 2;
                let copyB = b.stargazers_count + 2 * b.forks_count + b.open_issues_count / 2;

                return copyA - copyB;

            });

        };


    }




}());
