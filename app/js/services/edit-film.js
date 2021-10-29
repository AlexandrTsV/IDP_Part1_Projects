app.factory('editFilm', ['$http', function($http) { 
    return { post: function(title, film) { 
        var ls = JSON.parse(localStorage.getItem('films'));
        ls.data.forEach(element => {
            if (element.title == title)
            {
                element.title = film.title;
                element.genre = film.genre;
                element.productionDate = film.productionDate;
                element.producer = film.producer;
            } 
        });
        localStorage.setItem('films', JSON.stringify(ls));
  }}}]);