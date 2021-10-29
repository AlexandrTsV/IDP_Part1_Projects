app.directive('filmInfo', function() { 
    return { 
      restrict: 'E', 
      scope: { 
        info: '=',
        user: '='
      }, 
      templateUrl: 'js/directives/html/filmInfo.html' 
    }; 
  }); 