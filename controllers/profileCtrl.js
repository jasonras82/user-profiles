let profiles = [
  {
    user: 1,
    pic: 'http://www.fillmurray.com/g/200/300',
    status: 'Everything is bigger in Texas'
  },
  {
    user: 2,
    pic: 'http://www.fillmurray.com/g/500/350',
    status: 'RR Rules'
  },
  {
    user: 3,
    pic: 'http://www.fillmurray.com/g/225/325',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    user: 4,
    pic: 'http://www.fillmurray.com/g/300/400',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  }
];

module.exports = {
  getFriends: (req, res, next) => {
    let friendsList = req.session.currentUser.friends.map(friendID => {
      return profiles.find(profile => {
        return profile.user === friendID;
      });
    });
    res.send({
      currentUser: req.session.currentUser,
      friendsList
    });
  }

}
