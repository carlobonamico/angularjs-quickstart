/**
 * 
 */
"use strict";

var orders = angular.module('orders', ['ngResource']);

orders.controller("OrderCtrl", function($scope) {
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
});
