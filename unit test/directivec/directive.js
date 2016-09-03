app=angular.module("myApp",[])
    .controller('validatorcontroller',function($scope){

    $scope.text1=[],
        $scope.text2=[]

})
    .directive('directiveUrlTest',function(){
       return{
           restrict:'AE',



           link: function (scope,element) {
                   element.on("click",function(){
                       element.css("border", "9px solid red" );
               });

               //"border", "9px solid red"


           }
       }
    })
    .directive('directivenav', function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            controller: ['$scope', function directivenavController($scope) {
                var panes = $scope.panes = [];

                $scope.select = function(pane) {
                    angular.forEach(panes, function(pane) {
                        pane.selected = false;
                    });
                    pane.selected = true;
                };

                this.addPane = function(pane) {
                    if (panes.length === 0) {
                        $scope.select(pane);
                    }
                    panes.push(pane);
                };
            }],
            template: '<div class="navbar navbar-default">'+
            '<ul class="nav navbar-nav">'+
            '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">'+
            '<a href="" ng-click="select(pane)">{{pane.title}}</a>'+
       ' </li>'+
        '</ul>'+
        '<div class="tab-content" ng-transclude></div>'+
        '</div>'
        };
    })
    .directive('directivepanel',function(){
        return {
            require: '^^directivenav',
            restrict: 'E',
            transclude: true,
            scope: {
                title: '@'
            },
            link: function(scope, element, attrs, tabsCtrl) {
                tabsCtrl.addPane(scope);
            },
            template: '<div class="tab-pane" ng-show="selected">'+
            '<h4>{{title}}</h4>'+
        '<div ng-transclude></div>'+
        '</div>'
        };
    })

