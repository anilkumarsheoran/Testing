describe("controller check",function(){

    beforeEach(module('appControllers'));


    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));
    it('should test contact controller', function(){
        var $scope = {};
        var controller = $controller('contactController', { $scope: $scope });
        expect($scope.contact).toEqual("contacts");

    });


});

describe("resoce controller",function(){
    beforeEach(module('appControllers'));
    var $controller;

        beforeEach(inject(function(_$controller_){
            //scope=$rootScope.$new();
            $controller=_$controller_;
            //('resourceController');

                }));
    it("should check resources controller",function(){
        var $scope={};
        var controller=$controller('resourceController',{$scope:$scope});
        expect($scope.resource).toEqual('resources');
    })
})