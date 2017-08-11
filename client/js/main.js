var playlistApp = angular.module('playlistApp', ['ngRoute']);

playlistApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'PlaylistController',
        templateUrl: 'views/playlists.html'
    });

    $routeProvider.when('/artistes', {
        controller: 'PlaylistController',
        templateUrl: 'views/artistes.html'
    });

    $routeProvider.when('/charts',{
        controller: 'PlaylistController',
        templateUrl: 'views/charts.html'
    });

    $routeProvider.when('/releases', {
        controller: 'PlaylistController',
        templateUrl: 'views/releases.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});