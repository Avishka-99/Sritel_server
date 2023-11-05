const {INSERT, UPDATE, SELECT, DELETE, QUERY, SELECT_WHERE} = require('../../models/Server_3_DB');
const express = require('express');
const router = express.Router();
router.post('/addtobill', (req, res) => {
	let {user, amount} = req.body;
	const currentDate = new Date();
	const year = currentDate.getFullYear();
	const month = String(currentDate.getMonth() + 1).padStart(2, '0');
	const formattedDate = `${year}-${month}`;
	QUERY("SELECT * FROM bill WHERE user_id='" + user + "' AND issue_date='" + formattedDate + "'").then((result) => {
		if (result.length > 0) {
			QUERY('UPDATE bill set amount= amount+' + parseInt(amount)+" WHERE user_id='"+user+"' AND issue_date='"+formattedDate+"'");
            res.send('success');
		} else {
            console.log('sdsdsd')
			QUERY("INSERT INTO bill(user_id,amount,payment_status,issue_date) VALUES('" + user +"','" + parseInt(amount) +"','" + 'notpaid' +"','" + formattedDate + "')").then((response) => {
				res.send('success');
			});
		}
		
	});
});
router.post('/getbills',(req,res)=>{
    console.log(req.body.user);
    QUERY("SELECT * FROM bill").then((result)=>{
        console.log(result)
        res.send(result);
    })
});
module.exports = router;
