/**
 *
 */

var pizza5App = angular.module('pizza5App', ['ngResource']);

function PizzaMenuCtrl($scope, $resource) {

    var MenuResource = $resource('menu.json'); //, {userId:'@id'}
   $scope.menu = MenuResource.query(function() { //e non get

        console.log("Menu loaded");
    });

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



angular.module("pizza5App").controller("PizzaMenuCtrl",PizzaMenuCtrl);
angular.module("pizza5App").controller("OrderCtrl",OrderCtrl);
