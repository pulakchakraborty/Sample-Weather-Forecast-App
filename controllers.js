//controllers
myWeatherForecastApp.controller('homeController', ['$scope', '$log', 'cityService', function ($scope, $log, cityService) {
    $scope.cityName = cityService.cityName;
    $scope.$watch('cityName', function () {
        cityService.cityName = $scope.cityName;
    });
    $log.log('In the home page');
}]);

myWeatherForecastApp.controller('forecastController', ['$scope', '$resource', '$log', '$routeParams', 'cityService', function ($scope, $resource, $log, $routeParams, cityService) {
    $scope.cityName = cityService.cityName;
    
    //pass the date count through $routeParams
    $scope.days = $routeParams.days || '1';
    
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});
    
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.cityName, cnt: $scope.days, APPID: '7cc97faceed75bd9207b0632b15de297'});
    console.log($scope.weatherResult);
    
    //method to convert kelvin to celsius
    $scope.convertToCelsius = function (degKelvin) {
        return Math.round(((degKelvin - 273) * 10) / 10);
    };
    
    //method to convert the date coming from the API
    $scope.convertToDate = function (dateFromAPI) {
        return new Date(dateFromAPI * 1000);
    };
}]);