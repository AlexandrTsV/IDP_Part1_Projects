app.controller('MainController', ['$scope', 'films', function($scope, films) {
    $scope.films = films.get().data;
}]);