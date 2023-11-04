const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const {json} = require('sequelize');
const {INSERT, UPDATE, SELECT, DELETE} = require('./models/database');
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.listen(5002, () => {
	console.log('Server_2 listening on port 5002');
	// (async () => {
	// 	try {
	// 		//const query = 'SELECT * FROM your_table';
	// 		const results = await SELECT('user');
	// 		console.log(results);
	// 	} catch (error) {
	// 		console.error('Error executing query:', error);
	// 	}
	// })();
});
//INSERT('user', '(user_name,password)', "('dian','asd')");
