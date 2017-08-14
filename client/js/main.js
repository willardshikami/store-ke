var onlineStore = angular.module('onlineStore', ['ngRoute']);

onlineStore.config(function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'ProductsController',
        templateUrl: 'views/home.html'
    });

    $routeProvider.when('/soaps', {
        controller: 'ProductsController',
        templateUrl: 'views/soaps.html'
    });

    $routeProvider.when('/shop', {
        controller: 'ProductsController',
        templateUrl: 'views/shop.html'
    });

    $routeProvider.when('/bodybutters', {
        controller: 'ProductsController',
        templateUrl: 'views/bodybutters.html'
    });

    $routeProvider.when('/contacts', {
        controller: 'ProductsController',
        templateUrl: 'views/contacts.html'
    });

    $routeProvider.when('/about', {
        controller: 'ProductsController',
        templateUrl: 'views/about.html'
    });

        $routeProvider.when('/productdetail', {
        controller: 'ProductsController',
        templateUrl: 'views/product-detail.html'
    })

    .otherwise({
        redirectTo: '/'
    });
});