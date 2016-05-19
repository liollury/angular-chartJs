# angular-chart.js

[![Bower version](https://github.com/liollury/angular-chartJs/blob/master/chart.directive.js)

Angular directive for Chart.js(http://www.chartjs.org/). 


# V0.0.2

This is the stable version of angular-chartJs.js that uses the v2.1.3 version of Chart.js.
# Installation

### bower

    bower install --save angular-chartJs.js


# Utilisation

There are 4 options.

- `chart-datasets`: refer to Chart.js dataset options
-  `chart-labels`: List of chart labels
-  `chart-Options`: refer to Chart.js options
-  `chart-type`: string that refer to chart type (`line`, `bar`, `radar`, `polarArea`, `doughnut`, `pie`)

# Example

## Markup

```html
<canvas
        chart-js
        chart-labels="labels"
        chart-type="type",
        chart-datasets="datasets">

</canvas>
```

## Javascript

```javascript
angular.module("app", ["chart.js"])
  .controller("LineCtrl", ['$scope', function ($scope) {

  $scope.labels = ["January", "February", "March", "April", "May", "June"];
  $scope.datasets = [{
	    label: 'truite',
		data: [50, 41, 51, 32, 78, 74],
	    hidden: true
	  },
	  {
		label: 'poulet',
		data: [12, 1, 78, 54, 132, 45],
	    hidden: false
	  }
  ];
  $scope.type = 'line';
  
}]);
```


# Dynamic

angular-chartJs watch updates and update dynamically the view and destroy old chart.
