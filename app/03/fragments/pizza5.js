/**
 * 
 */
"use strict";

function PizzaMenuCtrl($scope) {
    $scope.menu = [
            {
                id : 0,
                name: "Margherita",
                price: 5,
                ingredients : ["Flour","Salt","Cheese","Tomato"]
            },
        {
            id : 0,
            name: "Napoli",
            price: 5,
            ingredients : ["Flour","Salt","Cheese","Tomato", "Anchovies"]
        },

        {
            id : 0,
            name: "Four Seasons",
            price: 5,
            ingredients : ["Flour","Salt","Cheese","Tomato","Mushrooms","Olives"]
        }
        ];
}


function OrderCtrl($scope) {
    $scope.order = {
        pizzaCount : 0,
        items : [],
        totalPrice : 0
    };

    $scope.add = function(pizza)
    {
        $scope.order.items.push(pizza);
        $scope.order.pizzaCount = $scope.order.pizzaCount + 1;
        $scope.order.totalPrice = $scope.order.totalPrice + pizza.price; //TODO REFACTOR
    }
}
