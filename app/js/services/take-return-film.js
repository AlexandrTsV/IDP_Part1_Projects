app.factory('takeReturnFilm', ['$http', function($http) { 
    return { post: function(film) {
            var ls = JSON.parse(localStorage.getItem('films'));
            ls.data.forEach(element => {
               if (element.title == film.title)
               {
                   element.taken = film.taken;
               } 
            });
            localStorage.setItem('films', JSON.stringify(ls));
        }
  }}]);