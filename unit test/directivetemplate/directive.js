app=angular.module("myApp",[])
    .directive('directiveUrlTest',function(){
       return{
           restrict:'AE',
           //templateUrl:'templatedir.html',


           link: function (scope,element) {
                   element.on("click",function(){
                       element.css("border", "9px solid red" );
               })
               //"border", "9px solid red"


           }
       }
    });