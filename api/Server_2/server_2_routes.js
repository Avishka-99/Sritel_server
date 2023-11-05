const {INSERT, UPDATE, SELECT, DELETE, QUERY, SELECT_WHERE} = require('../../models/Server_2_DB');
const express = require('express');
const router = express.Router();
router.post('/addpackage',(req,res)=>{
    const PK_name = req.body.name
	const PK_des =		req.body.description
	const PK_data = req.body.data
	const PK_voice = req.body.voice
	const PK_sms = req.body.sms
	const PK_price = req.body.price
    const PK_type = req.body.type
    console.log(typeof(PK_data))
    QUERY("INSERT INTO package(name,description,type,data_limit,voice_limit,sms_limit,price) VALUES('" + PK_name + "','" + PK_des + "','" + PK_type + "','" + parseFloat(PK_data) + "','" + parseInt(PK_voice) + "','" + parseInt(PK_sms) + "','" + parseInt(PK_price) + "')").then((response) => {
			console.log(response);
			res.send('success');
		});

})
router.post('/getallpackages', (req, res) => {
	QUERY('SELECT * FROM package').then((response) => {
		res.send(response);
	});
});
module.exports = router;