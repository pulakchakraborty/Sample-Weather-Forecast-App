//model
var myWeatherForecastApp = angular.module('myWeatherForecastApp', ['ngRoute', 'ngResource']);

//routes
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

//services
myWeatherForecastApp.service('nameService', function () {
    var self = this;
    this.name = 'Berlin';
});

//controllers
myWeatherForecastApp.controller('homeController', ['$scope', '$log', 'nameService', function ($scope, $log, nameService) {
    $scope.name = nameService.name;
    $scope.$watch('name', function () {
        nameService.name = $scope.name;
    });
    $log.log('In the home page');
}]);

myWeatherForecastApp.controller('forecastController', ['$scope', '$log', 'nameService', function ($scope, $log, nameService) {
    $scope.name = nameService.name;
    $log.log('In the forecast page');
}]);