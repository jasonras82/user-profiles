let express = require('express');
let cors = require('cors');
let session = require('express-session');
let bodyParser = require('body-parser');
let liveReload = require('express-livereload');
let app = express();
let port = 8003;
let User = require('./controllers/userCtrl');
let Profile = require('./controllers/profileCtrl');

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(session({secret: 'i have a secret'}));
// app.use(cors(corsOptions));
app.post('/api/login', User.login);
app.get('/api/profiles', Profile.getFriends);

app.listen(port, function() {
  console.log('Check it out, I\'m listening on port ' + port);
});

liveReload(app, config = {});
