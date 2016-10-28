let users = [
  {
    id: 1,
    name: 'PM',
    password: 'password1',
    friends: [3, 4]
  },
  {
    id: 2,
    name: 'RR',
    password: 'asdf',
    friends: [4]
  },
  {
    id: 3,
    name: 'TR',
    password: 'hunter2',
    friends: [1, 4]
  },
  {
    id: 4,
    name: 'LM',
    password: '777mittens777',
    friends: [1, 2, 3]
  }
];


module.exports = {
  login: (req, res, next) => {
    let foundUser = users.find(user => {
      return user.name === req.body.name && user.password === req.body.password;
    });
    if (foundUser) {
      req.session.currentUser = foundUser;
      return res.send({ userFound: true });
    }
    return res.send({ userFound: false });
  }
};
