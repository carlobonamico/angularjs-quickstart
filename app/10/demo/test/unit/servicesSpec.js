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


// Unit Test
describe('The OrderService', function(){
    var orderService;
    var pizza;

    beforeEach(module('orders'));

    beforeEach(inject(function($injector){
        orderService =  $injector.get('OrderService');
    }));

    it('should initially contain no pizzas', function(){
        expect(orderService.order.items.length).toBe(0);
    });

    it('should have totalPrice 0', function(){
        expect(orderService.order.totalPrice).toBe(0);
    });

    describe('when we add one pizza', function(){
        beforeEach(function(){
            pizza = {id:0, name:"Margherita",price: 5, ingredients: []}
            orderService.add(pizza);
        });

        it('should contain the same pizza', function(){
            expect(orderService.order.items[0]).toBe(pizza);
        })
        
        it('should contain 1 pizza', function(){
            expect(orderService.order.pizzaCount).toBe(1);
            expect(orderService.order.items.length).toBe(1);
        });

        it('totalPrice should be updated', function(){
            expect(orderService.order.totalPrice).toBe(pizza.price);
        });
    });

});


// integration Test
describe('The orders module', function() {
    var orderController;
    var pizza;
    var addPizzaController;
    var orderService;

    beforeEach(module('orders'));

    beforeEach(inject(function ($controller,$injector) {
        console.log("initializing controller");
        
        orderController =  $controller('OrderController');

       /* _OrderService_ = jasmine.createSpyObj('OrderService', ['add', 'items']);
        _OrderService_.add.and.returnValue(mockProvenances);
        _OrderService_.items.and.returnValue([{id : 0,name: 'Margherita'}]);*/

        addPizzaController =  $controller('AddPizzaController');
        orderService =  $injector.get('OrderService');

        spyOn(addPizzaController, 'add').andCallThrough();
    }));
    
    describe('The Order controller', function() {

        it('should initially contain no pizzas', function() {
            var items = orderController.getItems();
            expect(items.length).toEqual(0);
        });

        describe('When I add a pizza', function(){
            beforeEach(function () {
                pizza = {
                    id : 0,
                    name: 'Margherita'
                };

                addPizzaController.add(pizza);
            });

            it('OrderService should be invoked', function(){
                expect(addPizzaController.add).toHaveBeenCalled();
            });

            it('OrderService should contain one pizza', function(){
                expect(orderService.order.items.length).toBe(1);
            });

            it('OrderController should know that order contains one pizza', function() {
                var items = orderController.getItems();
                expect(items.length).toEqual(1);
            });
        });
    });

});

