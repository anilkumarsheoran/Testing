var appControllers = angular.module('appControllers',[]);

appControllers.controller('aboutMeController', function($scope,$http,$stateParams){
    $http.get("static/json/records.json")
    .then(function (response) {
        $scope.myWelcome = response.data.basics;
    });
   });	

appControllers.controller('resumeController',function($scope,$http,$stateParams){
    $http.get("static/json/records.json")
    .then(function (response) {
        $scope.Exp = response.data.Experience;
        $scope.education = response.data.education;
        $scope.project1 = response.data.Project1;
        $scope.project2 = response.data.Project2;
        $scope.project3 = response.data.Project3;
    });
});

appControllers.controller('contactController',function($scope){
     $scope.contact = 'contacts';
    $scope.submitclicked=function () {
        alert("Button is Enabled");

    }
});

appControllers.controller('resourceController',function($scope){
     $scope.resource ='resources'
});

