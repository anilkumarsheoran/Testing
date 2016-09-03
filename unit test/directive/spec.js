

describe('directive',function(){
	var $compile,
		$rootScope;

	beforeEach(module('myapp'));

	beforeEach(module("template.html"));

	beforeEach(inject(function(_$compile_,_$rootScope_){
		$compile = _$compile_;
		$rootScope = _$rootScope_;
		var elm=$compile("<my-app-directive></my-app-directive>")($rootScope);
		$rootScope.$digest();
		//var ext=element(by.className('tem1'));
		//var abc=elm.find("tem1");
		//var result = elm[0].querySelectorAll('.tem1');

	}));

	/*it("should check directive",function(){
		var $scope;
		var element=$compile("<my-app-directive></my-app-directive>")($rootScope);
		$rootScope.$digest();
		expect(element.html()).toContain("This is first directive,2");
	})*/

	it("should check external tempolate",function(){
		var ee=angular.element('.title');
		expect(ee.length).toEqual(1);
		///expect(elm.html()).toContain("This is first directive,2");
		/////var result=angular.element(elm).hasClass('tem1');
		/////expect(result).toEqual("true");
		//var res=angular.element("div.tem1").text();
		//var res=elm.find(".temp2");
		//expect(elm.text()).toContain("My First dir test");
		//expect(elm.html()).toContain("My First dir test");
		//expect(res.eq(0).text()).toContain('My First dir test');
		//expect(res.text()).toEqual('My First dir test')
 // expect(elm.find(".tem1").length).toBe(1);
// expect(elm.find(".tem1").text()).toEqual("aa");
	})


});
