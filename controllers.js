//controllers
myWeatherForecastApp.controller('homeController', ['$scope', '$location', '$log', 'cityService', function ($scope, $location, $log, cityService) {
    $scope.cityName = cityService.cityName;
    
    $scope.$watch('cityName', function () {
        cityService.cityName = $scope.cityName;
    });
    
    $scope.submit = function () {
        $location.path("/forecast");
    };
    
    $log.log('In the home page');
}]);

myWeatherForecastApp.controller('forecastController', ['$scope', '$log', '$routeParams', 'cityService', 'weatherService', function ($scope, $log, $routeParams, cityService, weatherService) {
    $scope.cityName = cityService.cityName;
    
    //pass the date count through $routeParams
    $scope.days = $routeParams.days || '1';
    
    $scope.weatherResult = weatherService.getWeatherInfo($scope.cityName, $scope.days);
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