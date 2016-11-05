// dependencies
var connection = require('../config/connection.js');

// ===============================================================================
// HELPER FUNCTIONS for building query strings
// these don't need to be inside the orm, because they don't need to be exported
// ===============================================================================

// handle question mark wildcards in query strings-very useful for the update/insert
function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push('?');
	};

	return arr.toString();
};

// handle multiple column calues (helpful for inserting multiple values)
function objToSql(ob) {
	// column1=value, column2=value2,...
	var arr = [];

	for (var key in ob) {
		if (ob.hasOwnProperty(key)) {
			arr.push(key + '=' + ob[key]);
		};
	};

	return arr.toString();
};

// ===============================================================================
// the ORM object
// ===============================================================================

var orm = {
	// select All function
	selectAll: function (table, cb) {
		// build mysql query string
		var queryString = 'SELECT * FROM ' + table + ';';

		// send mysql query command to db and return result
		connection.query(queryString, function (err, result) {
			// error handling
			if (err) throw err;
			// callback
			cb(result);
		});
	},
	// insert One item function
	insertOne: function (table, columns, values, cb) {
		// build mysql query string
		var queryString = 'INSERT INTO ' + table;

		queryString += ' (';
		queryString += columns.toString();
		queryString += ') ';
		queryString +='VALUES ';
		queryString += '("';
		queryString += values;
		queryString += '");';
		
		// send insert query command to mysql db
		connection.query(queryString, function (err, result) {
			// error handling
			if (err) throw err;
			// callback
			cb(result);
		});

	},
	// update one item
	updateOne: function (table, objColVals, condition, cb) {
		// build mysql query string
		var queryString = 'UPDATE ' + table;

		queryString += ' SET ';
		queryString += objToSql(objColVals);
		queryString += ' WHERE ';
		queryString += condition;
		console.log(queryString);

		// send update query command to mysql db
		connection.query(queryString, function (err, result) {
			// error handling
			if (err) throw err;
			// callback
			cb(result);
		});
	}
};

// export the ORM
module.exports = orm;