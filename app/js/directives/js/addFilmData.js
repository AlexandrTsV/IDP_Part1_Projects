app.directive('addFilmData', ['addFilm', '$location', '$window', function(addFilm, $location, $window) { 
    return { 
      restrict: 'E', 
      scope: {
        info: '='
      }, 
      templateUrl: 'js/directives/html/addFilmData.html',
      link: function(scope, element, attrs) { 
        console.log(scope.info);

        scope.buttonText = "Add", 
        scope.installed = false,

        scope.download = function() {
            addFilm.post(scope.info);
            $window.location.href = '/';
        }

      } 
    }; 
  }]); 