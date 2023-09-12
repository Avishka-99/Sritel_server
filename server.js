const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const {json} = require('sequelize');
const {INSERT, UPDATE, SELECT, DELETE} = require('./models/database');
const customerRoutes = require('./api/customer');
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', customerRoutes);
app.listen(5001, () => {
	console.log('Server listening on port 5001');
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
