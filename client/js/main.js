var playlistApp = angular.module('onlineStore', ['ngRoute']);

playlistApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'ProductsController',
        templateUrl: 'views/home.html'
    });

    $routeProvider.when('/home', {
        controller: 'ProductsController',
        templateUrl: 'views/home.html'
    });

    $routeProvider.when('/about',{
        controller: 'ProductsController',
        templateUrl: 'views/about.html'
    });

    $routeProvider.when('/bodybutter', {
        controller: 'ProductsController',
        templateUrl: 'views/bodybutter.html'
    });

    $routeProvider.when('/oils', {
        controller: 'ProductsController',
        templateUrl: 'views/oils.html'
    });

    $routeProvider.when('/soaps', {
        controller: 'ProductsController',
        templateUrl: 'views/soaps.html'
    });

    $routeProvider.when('/contacts', {
        controller: 'ProductsController',
        templateUrl: 'views/contacts.html'
    })

    .otherwise({
        redirectTo: '/'
    });
});