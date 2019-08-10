const mongoose = require('mongoose');
const config = require('../config/database');
const bcrypt = require('bcryptjs');
const PokemoncardSchema = mongoose.Schema({
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

const Pokemoncard = module.exports = mongoose.model('Pokemoncard', PokemoncardSchema);

/*module.exports.getUserById = function(id, callback) {
	User.findById(id, callback);
}*/

/*module.exports.getUserByUsername = function(username, callback) {
	const query = {username: username}
	User.findOne(query, callback);
}*/

module.exports.addCard = function(newCard, callback) {
	newCard.save(callback);
	/*console.log(newCard);*/
}

module.exports.getCard = function(id, callback) {
	const query = {id: id}
	Pokemoncard.findOne(query, callback);
}

/*module.exports.comparePassword = function(candidatePassword, hash, callback) {
	bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
		if(err) throw err;
		callback(null, isMatch);
	});

}*/