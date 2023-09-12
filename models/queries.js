const connection = require('./database');

const INSERT = async function (table, columns, values) {
	connection.query('INSERT INTO ' + table + ' ' + columns + ' VALUES ' + values, function (err, result, fields) {
		if (err) throw err;
		return JSON.parse(JSON.stringify(result));
		//console.log(JSON.parse(JSON.stringify(result)));
	});
};
const UPDATE = function (data) {
	console.log(data);
};
const SELECT = function (data) {
	console.log(data);
};
const DELETE = function (data) {
	console.log(data);
};
const QUERY = function (query) {
	connection.query(query, function (err, result, fields) {
		if (err) throw err;
		console.log(JSON.parse(JSON.stringify(result)));
		return JSON.parse(JSON.stringify(result));
		//console.log(JSON.parse(JSON.stringify(result)));
	});
};
module.exports = {INSERT, UPDATE, SELECT, DELETE, QUERY};
