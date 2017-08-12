var onlineStore = angular.module('onlineStore', ['ngRoute']);

onlineStore.config(function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'ProductsController',
        templateUrl: 'views/home.html'
    });

    $routeProvider.when('/', {
        controller: 'ProductsController',
        templateUrl: 'views/home.html'
    });

    $routeProvider.when('/', {
        controller: 'ProductsController',
        templateUrl: 'views/home.html'
    });

    $routeProvider.when('/', {
        controller: 'ProductsController',
        templateUrl: 'views/home.html'
    });

    $routeProvider.when('/', {
        controller: 'ProductsController',
        templateUrl: 'views/home.html'
    });

    $routeProvider.when('/', {
        controller: 'ProductsController',
        templateUrl: 'views/home.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});