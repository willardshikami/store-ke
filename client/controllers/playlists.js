angular.module('playlistApp')
    playlistApp.controller('PlaylistController', ['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {

        //PLAYLISTS
        $scope.getPlaylists = function(){
            $http.get('/api/playlists')
            .then(function(response){
                $scope.playlists = response.data;
            });
        }

        $scope.addPlaylist = function(){
            $http.post('/api/playlists', $scope.playlist)
            .then(function(response){
                window.location.href='#!/playlists'
            });
        }

        //ARTISTES
         $scope.getArtistes = function(){
            $http.get('/api/artistes').then(function(response){
                $scope.artistes = response.data;
            });
        }

        $scope.addArtistes = function(){
            $http.post('/api/artistes', $scope.charts)
            .then(function(response){
                window.location.href='#!/artistes'
            });
        }

        //RELEASES
        $scope.getReleases = function(){
            $http.get('/api/releases')
            .then(function(response){
                $scope.releases = response.data;
            });
        }

        $scope.addReleases = function(){
            $http.post('/api/releases', $scope.release)
            .then(function(response){
                window.location.href='#!/releases'
            });
        }

        //CHARTS
        $scope.getCharts = function(){
            $http.get('/api/charts')
            .then(function(response){
                $scope.charts = response.data;
            });
        }

        $scope.addCharts = function(){
            $http.post('/api/charts', $scope.charts)
            .then(function(response){
                window.location.href='#!/charts'
            });
        }

    }]);
    