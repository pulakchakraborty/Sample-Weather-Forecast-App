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
myWeatherForecastApp.service('cityService', function () {
    var self = this;
    this.cityName = 'Berlin';
});

//controllers
myWeatherForecastApp.controller('homeController', ['$scope', '$log', 'cityService', function ($scope, $log, cityService) {
    $scope.cityName = cityService.cityName;
    $scope.$watch('cityName', function () {
        cityService.cityName = $scope.cityName;
    });
    $log.log('In the home page');
}]);

myWeatherForecastApp.controller('forecastController', ['$scope', '$resource', '$log', 'cityService', function ($scope, $resource, $log, cityService) {
    $scope.cityName = cityService.cityName;
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.cityName, cnt: 2, APPID: '7cc97faceed75bd9207b0632b15de297'});    
    console.log($scope.weatherResult);
}]);