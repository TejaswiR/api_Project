var angularApp = angular.module('Population-App',['ngResource','ngRoute'])

angularApp.config(function($routeProvider) {
$routeProvider

.when ('/',
  {
    templateUrl: 'pages/basic.html',
    controller: 'MainController'
  })

});


angularApp.controller("MainController",['$resource',
function($resource){
   var vm=this;
   // var first = $resource('http://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP');
   // vm.firstResponse = first.query({FIPS:vm.CountryName,time:vm.Year,key:'479f7cd05dea5959866c96bf97c6a72c45272e5d'});
   // console.log(vm.firstResponse);
 vm.getData=function(){
  var first = $resource('http://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP');
   vm.firstResponse = first.query({FIPS:vm.CountryName,time:vm.Year,key:'479f7cd05dea5959866c96bf97c6a72c45272e5d'});
   console.log(vm.firstResponse);
 }
}]);


