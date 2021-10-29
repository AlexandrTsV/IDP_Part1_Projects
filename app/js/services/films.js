app.factory('films', [function() { 
  return { 
    get: function() {
      return JSON.parse(localStorage.getItem('films'));
    }
  };
}]);