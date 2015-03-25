/**
 *
 */

var menu = angular.module('menu', ['menu.services','ngRoute']);

menu.controller('PizzaMenuCtrl', function ($scope, $resource, MenuService) {

    $scope.menu = MenuService.query(function() { //e non get
        console.log("Menu loaded");
    });

});


menu.controller('IngredientsCtrl', function ($scope, $routeParams, MenuService) {

    console.log("Requesting ingredients for "+$routeParams);
    $scope.ingredients = MenuService.getIngredients($routeParams.id);

});
