app.factory('addFilm', ['$http', function($http) { 
    return { post: function(film) {
        var ls = JSON.parse(localStorage.getItem('films'));
        ls.data.push(film);
        localStorage.setItem('films', JSON.stringify(ls));
  }}}]);