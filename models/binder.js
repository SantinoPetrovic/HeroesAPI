const mongoose = require('mongoose');
const config = require('../config/database');
const bcrypt = require('bcryptjs');
const BinderSchema = mongoose.Schema({
	id: {
		type: String
	},
	pockets: {
		type: Number
	}
}, { collection: 'binders' });

const Binders = module.exports = mongoose.model('binders', BinderSchema);

module.exports.getBinder = function(id, callback) {
	const query = {id: id}
	Binders.findOne(query, callback);
}

/* Just to set something up */
module.exports.addBinder = function(newBinder, callback) {
	newBinder.save(callback);
}