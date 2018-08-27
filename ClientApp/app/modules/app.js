var app = angular.module('clientApp', ['ui.router']);

/*app.constants('urls', {

});*/

app.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home-abstract', {
                url: '/home',
               // abstract: true,
                views: {
                    '@': {
                        templateUrl: 'views/home.html',
                        controller: 'HomeController',
                        controllerAs: 'homeCtrl'
                    }

                }
            });
            /*.state('home-abstract.register', {
                url: '/register',
                views: {
                    'register': {
                        templateUrl: 'views/register.html',
                        controller: 'RegistrationController',
                        controllerAs: 'regCtrl'
                    }
                }
            });*/
            $urlRouterProvider.otherwise('/home/register');
    }
]);
