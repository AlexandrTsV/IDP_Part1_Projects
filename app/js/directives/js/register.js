app.directive('register', ['$location', 'userRegister', function($location, userRegister) { 
    return { 
      restrict: 'E', 
      scope: {
        info: '='
      }, 
      templateUrl: 'js/directives/html/register.html',
      link: function(scope, element, attrs) {
        scope.register = function() {
          if (userRegister.post(scope.info) == 1)
          {
            $location.url('/user/' + scope.info.username);
          }
        };
      }
    }
  }]);