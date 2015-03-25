/**
 *
 */
"use strict";

var menu = angular.module('menu', ['menu.services']);

menu.controller('PizzaMenuCtrl', function ($scope, MenuService) {

    $scope.menu = MenuService.query();

});
