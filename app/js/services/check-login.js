app.factory('checkLogin', ['$http', function($http) { 
    return { get: function(username) {
            var status = 0;
            var ls = JSON.parse(localStorage.getItem('users')).data;
            ls.forEach(element => {
               if (element.username == username) {
                   status = 1;
               }
            });
            return status;
        }
  }}]);