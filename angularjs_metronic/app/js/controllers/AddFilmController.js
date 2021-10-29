app.controller('AddFilmController', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.parms =
      {
        title: "", 
        producer: "", 
        genre: "",
        productionYear: 0,
        taken: false,
        username: $routeParams.username };
  }]);