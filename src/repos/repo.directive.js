(function() {
    'use strict';

    angular.module('gh')
        .directive('repo', repo);

    function repo() {
        let $ = angular.element;

        return {
            templateUrl: 'repos/repo.template.html',
            restrict: 'E',
            transclude: true,
            scope: {
                repo: '=',
            },
            link: setupCollapse
        };

        function setupCollapse(scope, element) {
            $(element)
                .find('header').on('click', function togglePanelBody() {
                    $(element).find('article').toggleClass('hidden');
                });
        }
    }

}());
