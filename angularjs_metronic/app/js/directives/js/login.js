app.directive('login', ['$location', 'checkLogin', function($location, checkLogin) { 
    return { 
      restrict: 'E', 
      scope: {
        info: '='
      }, 
      templateUrl: 'js/directives/html/login.html',
      link: function(scope, element, attrs) {
        scope.login = function() {
          if (checkLogin.get(scope.info) == 1)
          {
            $location.url('/user/' + scope.info);
          }
        };
      }
    }
  }]);