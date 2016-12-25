var myWeatherForecastApp = angular.module('myWeatherForecastApp', ['ngRoute', 'ngResource']);

myWeatherForecastApp.config(function ($routeProvider) {
    
    $routeProvider
    
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })
    
        .when('/forecast', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        })
});

myWeatherForecastApp.controller('homeController', ['$scope', '$log', function ($scope, $log) {
    $log.log('In the home page');
}]);

myWeatherForecastApp.controller('forecastController', ['$scope', '$log', function ($scope, $log) {
    $log.log('In the forecast page');
}]);