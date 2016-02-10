dfVizApp.controller("DFVizAppController", function($scope, $location, $http, $q) {
    $scope.activeView = 'home';

    $scope.$watch(
        function() { return $location.path(); },
        function(path) {
            if (_.includes(path, 'home')) {
                $scope.activeView = 'home';
            } else if (_.includes(path, 'sparksql')) {
                $scope.activeView = 'sparksql';
            } else if (_.includes(path, 'dataframes')) {
                $scope.activeView = 'dataframes';
            } else if (_.includes(path, 'views')) {
                $scope.activeView = 'views';
            } else {
                $scope.activeView = 'home';
            }
        }
    );
    
});