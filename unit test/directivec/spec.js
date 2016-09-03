describe("directive validator",function () {
	var $compile;
	var $rootScope;
	var form;
	beforeEach(module('myApp'));
	beforeEach(inject(function (_$compile_,_$rootScope_) {
		$compile=_$compile_;
		$rootScope=_$rootScope_;
		var elm=$compile('<form name="form" >'+
			'<input type="text" name="text1" ng-model="text1" directivenumbervalidator><span ng-show="form.text1.$error.number">Wrong Validator</span><br/>'+
		'<input type="text"  name="text2" ng-model="text2" directivetextvalidator><span ng-show="form.text2.$error.text">Wrong Validator| Length sould be more than 5</span><br/>'+

		'</form>')($rootScope);
		$rootScope.$digest();
		form = $rootScope.form;
	}));

	//element=angular.element('<input directivenumbervalidator>');
	it("should check number",function () {
		form.text1.$setViewValue('23344234');
		expect($rootScope.text1).toEqual('23344234');
		expect(form.text1.$valid).toEqual(true);
	//	elm.sendKeys('12');
	//	expect(elm.find(span).text()).toEqual('Wrong Validator');
	});

it("should check number",function () {
	form.text2.$setViewValue('abc');
	expect($rootScope.text2).toEqual('abc');
	expect(form.text2.$valid).toEqual(true);
	//	elm.sendKeys('12');
	//	expect(elm.find(span).text()).toEqual('Wrong Validator');
})
})