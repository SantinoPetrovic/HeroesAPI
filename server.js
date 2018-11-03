// Get dependencies
const express = require('express');
const GetHeroService  = require('./services/getDotaHeroService')
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
var cors = require('cors');
const config = require('./config/database');
mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
	console.log('DB: '+config.database);
});

const app = express()

const port = 3000;

const heroes = require('./routes/heroes');
const users = require('./routes/users');

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

app.get('/api/getSmashHeroes', function (req, res) {
  let smashHeroServiceObj = new GetHeroService(req, res)
  smashHeroServiceObj.getSmashHeroes()
})

app.get('/api/getSmashHeroes/:link', function (req, res) {
  let heroServiceObj = new GetHeroService(req, res)
  heroServiceObj.getSpecificSmashHero(req.params.link)
})

app.post('/api/addSmashHero', function (req, res) {
	let heroServiceObj = new GetHeroService(req, res)
	heroServiceObj.addSmashHero(req.body)
	console.log(req.body);
})

app.use('/heroes', heroes);
app.use('/users', users);

app.listen(port, function () {
  console.log('Listening on port 3000, Heroes API activated!')
})
