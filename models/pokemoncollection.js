const mongoose = require('mongoose');
const config = require('../config/database');
const PokemoncollectionSchema = mongoose.Schema({
	code: {
		type: String
	},
	ptcgoCode: {
		type: String
	},
	totalCards: {
		type: Number
	},
	name: {
		type: String
	},
	series: {
		type: String
	},
	standardLegal: {
		type: Boolean
	},
	expandedLegal: {
		type: Boolean
	},
	releaseDate: {
		type: String
	}
}, { collection: 'pokemonCollection' });

const Pokemoncollection = module.exports = mongoose.model('Pokemoncollection', PokemoncollectionSchema);

module.exports.addCollection = function(newCollection, callback) {
	newCollection.save(callback);
}

module.exports.getCollection = function(name, callback) {
	const query = {name: name}
	Pokemoncard.findOne(query, callback);
}