app.directive('takeFilm', ['takeReturnFilm', '$location', function(takeReturnFilm, $location) { 
    return { 
      restrict: 'E', 
      scope: {
        info: '=',
        user: '='
      }, 
      templateUrl: 'js/directives/html/takeFilm.html',
      link: function(scope, element, attrs) {
        function f(condition)
        {
          return condition ? "Return" : "Take";
        }

        scope.buttonText = f(scope.info.taken),
        scope.editButtonText = "Edit",
      
        scope.isEditable = function() {
          return (scope.user && scope.user == scope.info.username);
        }

        scope.edit = function() {
          console.log(scope);
          $location.url('/edit-film/' + scope.info.title + "/" + scope.user);

          return;
        }

        scope.download = function() { 
          element.toggleClass('btn-active');

          scope.info.taken = !scope.info.taken;
          takeReturnFilm.post(scope.info);
          scope.buttonText = f(scope.info.taken); 
        } 
      } 
    }; 
  }]);