var app=angular.module("myapp",[]).controller('myappcontroller',function(){


})

	.directive('myAppDirective',function(){

		return{
			restrict:'EA',
			//transclude:"true",
			//template:'<div>This is first directive,{{1+1}}</div>',
            templateUrl:'template.html'
		}


	})