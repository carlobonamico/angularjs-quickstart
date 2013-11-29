/**
 * 
 */
"use strict";

var pizza5App = angular.module('pizza5App', ['menu','orders', 'ngRoute']);




pizza5App.config(
    function($routeProvider, $locationProvider) {

        $routeProvider.when('/', {
            templateUrl: 'partials/menu.html',
            controller: 'PizzaMenuCtrl'
        });
        $routeProvider.when('/signup', {
            templateUrl: 'partials/signup.html'

        });
        $routeProvider.when('/pizza/:id', {
            templateUrl: 'partials/ingredients.html',
            controller: 'IngredientsCtrl'
        });
        //$routeProvider.otherwise({ redirectTo: '#/' });

        // configure html5 to get links working on jsfiddle
        //$locationProvider.html5Mode(true);
    });