'use strict';

/* jasmine-1.3.0 specs for services go here */

describe('The order modules', function() {
    var scope, orderController;
    
    beforeEach(module('orders'));

    beforeEach(inject(function ($rootScope, $controller) {
        console.log("initializing controller");
        scope = $rootScope.$new();

        orderController =  $controller('OrderCtrl', {
                '$scope': scope
            });
    }));
    
    describe('the Order controller', function() {

        it('should initially contain no pizzas', function() {
            expect(scope.order.items.length).toEqual(0);
        });
    });

    

    
    

});
/**
 * Created by bonamico on 11/27/13.
 */
