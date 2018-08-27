angular.module('clientApp').controller('HomeController', ['$state', '$http', '$scope', '$rootScope',
    function($state, $http, $scope, $rootScope) {
        $http.get("http://localhost:8080/Core/").then(function(response){
            console.log(response);
        });
       
        
    }
]);