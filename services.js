//services
myWeatherForecastApp.service('cityService', function () {
    var self = this;
    this.cityName = 'Berlin';
});

myWeatherForecastApp.service('weatherService', ['$resource', function ($resource) {
    this.getWeatherInfo = function(city, days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {get: {method: "JSONP"}});
        return weatherAPI.get({ q: city, cnt: days, APPID: '7cc97faceed75bd9207b0632b15de297'});
    };
}]);