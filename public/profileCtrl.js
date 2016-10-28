angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {
	// FIX ME - assign values to $scope.currentUser and $scope.friends
  friendService.getFriends()
    .then(response => {
      console.log(response.friends);
      console.log(response.currentUser);
      $scope.currentUser = response.currentUser;
      $scope.friends = response.friendsList;
    });
});
