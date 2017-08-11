angular.module('onlineStore')
    onlineStore.controller('ProductsController', ['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {

        //GET PRODUCTS
        $scope.getProducts = function(){
            $http.get('/api/products')
            .then(function(response){
                $scope.products = response.data;
            });
        }

        $scope.addProduct = function(){
            $http.post('/api/products', $scope.product)
            .then(function(response){
                window.location.href='#!/products'
            });
        }

    }]);
    