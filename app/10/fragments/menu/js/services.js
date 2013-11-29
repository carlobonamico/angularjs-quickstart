/**
 *
 */
"use strict";

var menuServices = angular.module('menu.services', ['ngResource']);

menuServices.service("MenuService", function PizzaMenuService($resource) {

    var MenuResource = $resource('menu.json'); //, {userId:'@id'}

    var service =
    {
        query: function () {
            var menu = MenuResource.query(function () { //e non get
                //user.$save();
                console.log("Menu loaded");
            });
            return menu;
        }
    };
    return service;
})
;
