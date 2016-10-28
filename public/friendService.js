angular.module('userProfiles')
.service('friendService', function( $http ) {


    this.login = function( user ) {
      return $http.post('/api/login', user)
        .then(response => {
          return response.data;
        });
    };

    this.getFriends = function() {
    	return $http.get('/api/profiles')
        .then(response => {
          return response.data;
        });
    };

});
