//directives
myWeatherForecastApp.directive('weatherReport', function () {
   return {
       restrict: 'E',
       templateUrl: 'directives/weatherReport.html',
       replace: true,
       scope: {
            weatherObject: "=",
            convertDate: "&",
            convertTemperature: "&",
            dateFormat: "@"
       }
   } 
});