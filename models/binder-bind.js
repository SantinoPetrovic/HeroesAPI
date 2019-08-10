const mongoose = require('mongoose');
const config = require('../config/database');
const bcrypt = require('bcryptjs');
const BinderBindSchema = mongoose.Schema({
	id: {
		type: String
	},
	binderId: {
		type: String
    },
	userId: {
		type: String
    },
	name: {
		type: String
	}         
}, { collection: 'binder-binds' });

const Binders = module.exports = mongoose.model('binder-binds', BinderBindSchema);

module.exports.getBindedBindersByUser = function(userId, callback) {
	const query = {userId: userId}
	Binder.findOne(query, callback);
}

/* Just to set something up */
module.exports.addBindedBinder = function(newBindedBinder, callback) {
	newBindedBinder.save(callback);
}