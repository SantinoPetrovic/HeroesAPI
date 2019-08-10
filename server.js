// Get dependencies
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config/database');
mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
	console.log('DB: '+config.database);
});

const app = express()

const port = 3000;

const heroes = require('./routes/heroes');
const users = require('./routes/users');
const extern = require('./routes/extern');
const binders = require('./routes/binders');
const bindedbinders = require('./routes/bind-binders');
const pokemoncards = require('./routes/pokemoncards');
/*const ownedbinders = require('./routes/ownedbinders');
const ownedpokemoncards = require('./routes/ownedpokemoncards');*/

app.use(cors());

app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

/*app.use(bodyParser.urlencoded({extended: true}) );*/

app.get('/', function (req, res) {
  res.send('Invalid Endpoint.');
})

app.use('/heroes', heroes);
app.use('/users', users);
app.use('/extern', extern);
app.use('/binders', binders);
app.use('/bindedBinders', binders);
app.use('/pokemontcg', pokemoncards);

app.listen(port, function () {
  console.log('Listening on port 3000, API activated!')
})
