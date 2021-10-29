app.controller('EditFilmController', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.title = $routeParams.title;
    $scope.parms =
      {
        title: $routeParams.title, 
        producer: "", 
        genre: "",
        productionYear: 0,
        taken: false,
        username: $routeParams.username };
  }]);