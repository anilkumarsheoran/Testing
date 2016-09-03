 app.directive('directivenumbervalidator',function(){
        return  {
            restrict:'AE',
            require:'ngModel',
            link: function(scope, elm, attrs, ctrl) {
                ctrl.$parsers.unshift(nocheck);
                ctrl.$formatters.unshift(nocheck);

                function nocheck(viewValue,modelValue) {

                    if (parseInt(viewValue) % 1 === 0 ) {
                        ctrl.$setValidity('number', true);
                    }
                    else {
                        if(ctrl.$isEmpty(viewValue))
                        { ctrl.$setValidity('number', true);}
                        else
                        ctrl.$setValidity('number', false);
                    }
                    return viewValue;
                }
            }
        }
    })
     .directive('directivetextvalidator',function(){
         return  {
             restrict:'AE',
             require:'ngModel',
             link: function(scope, elm, attrs, ctrl) {
                 ctrl.$parsers.unshift(nocheck);
                 ctrl.$formatters.unshift(nocheck);

                 function nocheck(viewValue) {
//&& viewValue.length>5
                     var FLOAT_REGEXP = /[a-z]/;
                         if(FLOAT_REGEXP.test(viewValue)) {
                         ctrl.$setValidity('text', true);
                     }
                     else {
                             if(ctrl.$isEmpty(viewValue))
                             { ctrl.$setValidity('text', true);}
                             else
                                 ctrl.$setValidity('text', false);
                         }
                     return viewValue;
                 }
             }
         }
     })