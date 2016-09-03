describe('directive template URL test',function(){
   var $compile;
    var $rootScope;
    beforeEach(module('myApp'));
    beforeEach(module('templatedir.html'));
    
    beforeEach(inject(function(_$compile_,_$rootScope_) {
        $rootScope=_$rootScope_;
        $compile=_$compile_;
    }));

  /*it("should check url",function () {
     // =angular.element('<directive-url-test></directive-url-test>');
        var element=$compile("<directive-url-test></directive-url-test>")($rootScope);
        $rootScope.$digest();
        var av=element.find('span');
        expect(av.length).toBe(2);
        expect(element.find("#dirclass").hasClass("dirclass"));


    });*/


    it("should check directive link function",function () {
        var element=$compile("<directive-url-test></directive-url-test>")($rootScope);
        $rootScope.$digest();
        element.triggerHandler('click');
        expect(element.css('border')).toEqual("9px solid red");
    })
})