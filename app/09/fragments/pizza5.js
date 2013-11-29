/**
 * 
 */
"use strict";

var pizza5App = angular.module('pizza5App', ['ngResource']);

function PizzaMenuCtrl($scope, $resource) {

    var MenuResource = $resource('menu.json'); //, {userId:'@id'}
   $scope.menu = MenuResource.query(function() { //e non get

        console.log("Menu loaded");
    });

}
