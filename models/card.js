const mongoose = require('mongoose');
const config = require('../config/database');
const bcrypt = require('bcryptjs');
const CardSchema = mongoose.Schema({
	name: {
		type: String
	},
	id: {
		type: String
	},
	nationalPokedexNumber: {
		type: Number
	},
	types: {
		type: Array
	},
	subtype: {
		type: String
	},
	supertype: {
		type: String
	},
	hp: {
		type: String
	},
	number: {
		type: String
	},
	artist: {
		type: String
	},
	rarity: {
		type: String
	},
	series: {
		type: String
	},
	set: {
		type: String
	},
	setCode: {
		type: String
	},
	retreatCost: {
		type: Array
	},
	attacks: {
		type: Array
	},
	weaknesses: {
		type: Array
	}
}, { collection: 'pokemonTCG' });

const Card = module.exports = mongoose.model('Card', CardSchema);

module.exports.addCard = function(newCard, callback) {
	newCard.save(callback);
}
