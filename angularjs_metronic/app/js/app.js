var app = angular.module('FilmMarketApp', ['ngRoute']).run(initFun);

function initFun($http) {
  if (!localStorage.getItem('films')) {
    $http.get('http://localhost:9000/js/films.json').then(function (films) {
      localStorage.setItem('films', JSON.stringify(films));
      console.log(localStorage.getItem('films'));
    });
  }

  if (!localStorage.getItem('users')) {
    $http.get('http://localhost:9000/js/users.json').then(function (users) {
      localStorage.setItem('users', JSON.stringify(users));
      console.log(localStorage.getItem('users'));
    });
  }
}

app.config(function ($routeProvider,$locationProvider) { 
    $locationProvider.hashPrefix('');
    $routeProvider 
      .when('/', { 
        controller: 'MainController', 
        templateUrl: 'views/main-page.html' 
      })
      .when('/user/:username', { 
        controller: 'UserStorageController', 
        templateUrl: 'views/user-storage-page.html' 
      })
      .when('/add-film/:username', {
        controller: 'AddFilmController', 
        templateUrl: 'views/add-film-page.html' 
      })
      .when('/edit-film/:title/:username', {
        controller: 'EditFilmController', 
        templateUrl: 'views/edit-film-page.html' 
      })
      .when('/login', {
        controller: 'LoginController', 
        templateUrl: 'views/login-page.html' 
      })
      .when('/register', {
        controller: 'RegisterController', 
        templateUrl: 'views/register-page.html' 
      })
      .otherwise('/')
  }); 