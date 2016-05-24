/**
 * Created by olelay on 22/03/2016.
 */


(function(){
    'use strict';
    /* global Chart */
    angular
        .module('chart.js', [])
        .directive('chartJs', chartJs);

    /** @ngInject */
    function chartJs($timeout) {
        return {
            restrict: "A",
            scope: {
                chartDatasets: '=?',
                chartLabels: '=?',
                chartOptions: '=?',
                chartType: '=?'
            },
            link : function (scope, element){
                var cvs;
                var chart;

                scope.$watch('chartDatasets', reload);
                scope.$watch('chartOptions', reload);
                scope.$watch('chartType', reload);
                scope.$watch('chartLabels', reload);

                function reload() {
                    if (cvs) {
                        cvs.remove();
                        if (chart) {
                            try {
                                chart.destroy();
                            }catch(e) {

                            }
                        }
                        cvs = null;
                        chart = null;
                    }

                    var labels = scope.chartLabels || [];
                    var type = scope.chartType || 'bar';
                    var datasets = scope.chartDatasets || [];
                    var options = angular.extend({}, scope.chartOptions);

                    if (datasets.length !== 0) {

                        cvs = angular.element("<canvas></canvas>");
                        element.append(cvs);
                        var ctx = cvs[0].getContext('2d');

                        chart = new Chart(ctx, {
                            type: type,
                            data: {
                                labels: labels,
                                datasets: datasets
                            },
                            options: options
                        });
                    }
                }

            }
        }
    }
})();
