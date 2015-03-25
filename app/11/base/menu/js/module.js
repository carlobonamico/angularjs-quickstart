/**
 *
 */

var menu = angular.module('menu', ['menu.services']);

menu.controller('PizzaMenuCtrl', function ($scope, $resource, MenuService) {

    $scope.menu = MenuService.query(function() { //e non get
        console.log("Menu loaded");
    });

});
