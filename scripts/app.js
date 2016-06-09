var angularApp = angular.module('Population-App',['ngResource','ngRoute'])

angularApp.config(function($routeProvider) {
$routeProvider

.when ('/',
  {
    templateUrl: 'pages/basic.html',
    controller: 'MainController'
  })
.when ('/percent',
  {
    templateUrl: 'pages/percent.html',
    controller: 'PercentageController'
  })
.when ('/population',
{
  templateUrl: 'pages/population.html',
  controller: 'ThirdController'
})

});


angularApp.controller("MainController",['$resource',
function($resource){
   var vm=this;
 vm.getData=function(){
  var first = $resource('http://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP');
   vm.firstResponse = first.query({FIPS:vm.CountryName,time:vm.Year,key:'479f7cd05dea5959866c96bf97c6a72c45272e5d'});
   console.log(vm.firstResponse);
 }
}]);

angularApp.controller("PercentageController",['$resource',
function($resource){
   var vm=this;
 vm.getData=function(){
  var second = $resource('http://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP');
   vm.secondResponse = second.query({FIPS:vm.CountryName,time:vm.Year,key:'479f7cd05dea5959866c96bf97c6a72c45272e5d'});
   console.log(vm.secondResponse);
 }
}]);


angularApp.controller("ThirdController",['$resource',
function($resource){
   var vm=this;
   var population = $resource('http://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&FIPS=IN&time=2014&SEX=0&key=479f7cd05dea5959866c96bf97c6a72c45272e5d');
   vm.populationResponse = population.query();
   console.log(vm.populationResponse);
}]);

