'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngIntlTelInput',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]).config(['$locationProvider', '$routeProvider', 'ngIntlTelInputProvider', function ($locationProvider, $routeProvider, ngIntlTelInputProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/view1'});
    ngIntlTelInputProvider.set({initialCountry: 'us'});
}]);
