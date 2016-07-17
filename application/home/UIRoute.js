var app = angular.module('demo', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/shows');

    $stateProvider
        .state('shows', {
            url: '/shows',
            views: {
                '': {
                    templateUrl: 'view/shows.html'
                },
                'topbar@shows': {
                    templateUrl: 'view/topbar.html'
                },
                'main@shows': {
                    templateUrl: 'view/detail.html'
                }
            }
        })
        .state('shows.shoppingCart', {
            url: '/shoppingCart',
            views: {
                'main@shows': {
                    templateUrl: 'view/shoppingCart.html',
                }
            }

        })
        .state('shows.personal', {
            url: '/personal',
            views: {
                'main@shows': {
                    templateUrl: 'view/personal.html',
                    controller: function($scope, $state) {
                        $scope.addUserType = function() {
                            $state.go("shows.personal.addusertype");
                        }
                    }
                }
            }
        })


}]);
