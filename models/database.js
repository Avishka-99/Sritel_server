const mysql = require('mysql');
// const {INSERT, UPDATE, SELECT, DELETE} = require('./queries');
// Create a connection pool to the MySQL database
// INSERT('asdsa');
const pool = mysql.createPool({
	// Adjust this value based on your requirements
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'sritel',
});
async function INSERT(table, columns, values) {
	return new Promise((resolve, reject) => {
		pool.getConnection((err, connection) => {
			if (err) {
				reject(err);
				return;
			}

			// Execute the query using the connection
			connection.query('INSERT INTO ' + table + ' ' + columns + ' VALUES ' + values, (err, result, fields) => {
				connection.release(); // Release the connection back to the pool

				if (err) {
					reject(err);
					return;
				}
				console.log(result);
				resolve(JSON.parse(JSON.stringify(results)));
			});
		});
	});
}
// const INSERT = async function (table, columns, values) {
// 	pool.query('INSERT INTO ' + table + ' ' + columns + ' VALUES ' + values, function (err, result, fields) {
// 		if (err) throw err;
// 		return JSON.parse(JSON.stringify(result));
// 		//console.log(JSON.parse(JSON.stringify(result)));
// 	});
// };
const UPDATE = function (data) {
	console.log(data);
};
// const SELECT = function (data) {
// 	console.log(data);
// };
const DELETE = function (data) {
	console.log(data);
};
async function SELECT(table) {
	return new Promise((resolve, reject) => {
		pool.getConnection((err, connection) => {
			if (err) {
				reject(err);
				return;
			}

			// Execute the query using the connection
			connection.query('SELECT * FROM ' + table, (err, result, fields) => {
				connection.release(); // Release the connection back to the pool

				if (err) {
					reject(err);
					return;
				}
				//console.log(result);
				resolve(JSON.parse(JSON.stringify(result)));
			});
		});
	});
}
async function QUERY(query) {
	console.log(query);
	return new Promise((resolve, reject) => {
		pool.getConnection((err, connection) => {
			if (err) {
				reject(err);
				return;
			}

			// Execute the query using the connection
			connection.query(query, (err, result, fields) => {
				connection.release(); // Release the connection back to the pool

				if (err) {
					reject(err);
					return;
				}
				//console.log(result);
				resolve(JSON.parse(JSON.stringify(result)));
			});
		});
	});
}
// const QUERY = function (query) {
// 	pool.query(query, function (err, result, fields) {
// 		if (err) throw err;
// 		console.log(JSON.parse(JSON.stringify(result)));
// 		return JSON.parse(JSON.stringify(result));
// 		//console.log(JSON.parse(JSON.stringify(result)));
// 	});
// };
module.exports = {INSERT, UPDATE, SELECT, DELETE, QUERY};
// module.exports = pool;
