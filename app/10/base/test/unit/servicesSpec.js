'use strict';

/* jasmine-1.3.0 specs for services go here */

// the first angular test
describe('Hello World', function (){
    var element;
    var scope;

    beforeEach(inject(function($compile, $rootScope) {
        scope = $rootScope;
        element =  angular.element("<div>{{2 +2 }}</div");
        element = $compile(element)($rootScope);
    }))

    it('Shoul be equal 4', function(){
        scope.$digest();
        expect(element.html()).toBe("4");
    });


});



