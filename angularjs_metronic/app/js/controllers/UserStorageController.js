app.controller('UserStorageController', ['$scope', 'films', '$routeParams', '$location', 'takeReturnFilm', function($scope, films, $routeParams, $location, takeReturnFilm) {
    $scope.films = films.get().data; 
    $scope.username = $routeParams.username;

    $scope.buttonText = function(info)
    {
      return info.taken ? "Return" : "Take";
    }

    $scope.editButtonText = "Edit",
  
    $scope.isEditable = function(info) {
      return (info.username == $scope.username);
    }

    $scope.edit = function(info) {
      $location.url('/edit-film/' + info.title + "/" + $scope.username);

      return;
    }

    $scope.download = function(info) { 
      info.taken = !info.taken;
      takeReturnFilm.post(info);
    } 
}]);