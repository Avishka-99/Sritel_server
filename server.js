const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(5001, () => {
	console.log('Server listening on port 5001');
});
