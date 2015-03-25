/**
 *
 */

var menuServices = angular.module('menu.services', ['ngResource']);

menuServices.service("MenuService", function PizzaMenuService($resource) {

    var MenuResource = $resource('menu.json'); //, {userId:'@id'}

    var service =
    {
        query: function () {
            var menu = MenuResource.query();
            return menu;
        }
    };
    return service;
})
;
