const mongoose = require('mongoose');
const config = require('../config/database');
const bcrypt = require('bcryptjs');
const BindedCardSchema = mongoose.Schema({
	id: {
		type: String
    },
    cardId: {
        type: String
    },
    userID: {
        type: String
    },
    condition: {
        type: String
    },        
    pokemonCoins: {
        type: Number
    },
    isShadowless: {
        type: Boolean
    }
}, { collection: 'bindedCard' });

const BindCard = module.exports = mongoose.model('bindedCard', BindedCardSchema);

module.exports.getCardsByUser = function(userID, callback) {
	const query = {userID: userID}
	BindCard.findOne(query, callback);
}

/* Just to set something up */
module.exports.addCard = function(newCard, callback) {
	newCard.save(callback);
}