const mongoose = require('mongoose');
const config = require('../config/database');

const HeroSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	link: {
		type: String,
		required: true
	}
}, { collection: 'heroes' });

const Hero = module.exports = mongoose.model('Hero', HeroSchema);

module.exports.getHeroById = function(id, callback) {
	Hero.findById(id, callback);
}

module.exports.getHeroByLink = function(link, callback) {
	const query = {link: link}
	Hero.findOne(query, callback);
}

module.exports.addHero = function(newHero, callback) {
	newHero.save(callback);
}