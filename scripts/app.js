var angularApp = angular.module('Population-App',['ngResource','ngRoute'])

angularApp.config(function($routeProvider) {
$routeProvider

.when ('/',
  {
    templateUrl: 'pages/basic.html',
    controller: 'MainController',
    controllerAs:'mc'
  })

});


angularApp.controller("MainController",['$resource',
function($resource){
   var vm=this;
   var first = $resource('http://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&FIPS=IN&time=2014&SEX=2');
   vm.firstResponse = first.query();
   console.log(vm.firstResponse);
}]);


