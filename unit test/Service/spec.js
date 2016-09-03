describe('service check',function(){

	var service;
	var httpBackend;
	var scope;
	beforeEach(module('myApp'));
	beforeEach(inject(function($httpBackend,_myService_){
		myService=_myService_;
		httpBackend=$httpBackend;
	}));
	it('ServiceTestSpec', function () {

		var returnData = {};

		//7. expectGET to make sure this is called once.
		httpBackend.expectGET("http://jsonplaceholder.typicode.com/posts/1").respond(returnData);

		//8. make the call.
		var returnedPromise = myService.getstudents(1);

		//9. set up a handler for the response, that will put the result
		// into a variable in this scope for you to test.
		var result;
		returnedPromise.then(function (response) {
			result = response.data;
		});

		//10. flush the backend to "execute" the request to do the expectedGET assertion.
		httpBackend.flush();

		//11. check the result.

		expect(result).toEqual(returnData);

	});
})