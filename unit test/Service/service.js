app=angular.module('myApp',[])
    .controller('myController',function ($scope,$http,myService) {

        var retservice=myService.getstudents();
        retservice.then(function(result){
            $scope.result1=result.data
        });
    })
    .service('myService',['$http',function($http){
       var urlBase='http://jsonplaceholder.typicode.com';
    var myService={};

        myService.getstudents=function(){
            return $http.get(urlBase+'/posts/1');
        };
 return myService;
    }])
