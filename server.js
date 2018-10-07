// Get dependencies
const express = require('express');
const GetHeroService  = require('./services/getDotaHeroService')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/database');
mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
	console.log('DB: '+config.database);
});

const app = express()

const port = 3000;

const heroes = require('./routes/heroes');

app.use(bodyParser.json());
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

app.listen(port, function () {
  console.log('Listening on port 3000, Heroes API activated!')
})