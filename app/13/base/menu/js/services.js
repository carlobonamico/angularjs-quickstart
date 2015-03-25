/**
 *
 */

var menuServices = angular.module('menu.services', ['ngResource']);

menuServices.service("MenuService", function PizzaMenuService($resource) {

    var MenuResource = $resource('menu.json'); //, {userId:'@id'}

    this.menu = [];

    this.getIngredients = function (id) {
        return this.menu[id].ingredients;
    };

    this.query = function () {
        this.menu = MenuResource.query(function () { //e non get
            //user.$save();
            console.log("Menu loaded");
        });
        return this.menu;
    }

    this.query();


})
;
