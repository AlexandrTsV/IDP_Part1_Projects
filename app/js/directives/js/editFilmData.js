app.directive('editFilmData', ['editFilm', '$location', '$window', function(editFilm, $location, $window) { 
    return { 
      restrict: 'E', 
      scope: {
        info: '=',
        title: '='
      }, 
      templateUrl: 'js/directives/html/editFilmData.html',
      link: function(scope, element, attrs) { 
        console.log(scope.info);

        scope.buttonText = "Edit", 
        scope.installed = false,

        scope.download = function() {
            editFilm.post(scope.title, scope.info);
            $window.location.href = '/';
        }

      } 
    }; 
  }]); 