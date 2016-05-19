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
    function chartJs() {
        return {
            restrict: "A",
            scope: {
                chartDatasets: '=?',
                chartLabels: '=?',
                chartOptions: '=?',
                chartType: '=?'
            },
            link : function (scope, element){
                var cvs = element[0];
                var ctx = cvs.getContext('2d');
                var chart;

                scope.$watch('chartData', reload);
                scope.$watch('chartOptions', reload);
                scope.$watch('chartType', reload);
                scope.$watch('chartLabels', reload);

                function reload() {
                    var labels = scope.chartLabels || [];
                    var type = scope.chartType || 'bar';
                    var datasets = scope.chartDatasets || [];
                    var options = {
                        scale: {
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    };
                    options = angular.extend(options, scope.chartOptions);
                    if (chart) {
                        chart.destroy();
                    }
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
})();
