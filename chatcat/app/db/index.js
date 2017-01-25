'use strict';
const config = require('../config');
const Mongoose = require('mongoose').connect(config.dbURI);

//Log an error if connection fails
Mongoose.connection.on('error', error => {
	console.log("MongoDBB Error", error);
});

module.exports = {
	Mongoose
}