app.factory('userRegister', ['$http', function($http) { 
    return { post: function(data) {
        var status = 1;
        var ls = JSON.parse(localStorage.getItem('users'));
        
        console.log(data);

        ls.data.forEach(element => {
           if (element.username == data.username) {
               status = 0;
           }
        });

        if (status != 0) {
            ls.data.push(data);
            localStorage.setItem('users', JSON.stringify(ls));
        }
        
        return status;
    }
  }}]);