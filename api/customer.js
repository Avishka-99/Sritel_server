const path = require('path');
const express = require('express');
const router = express.Router();
const app = express();
const {INSERT, UPDATE, SELECT, DELETE, QUERY} = require('../models/database');
const {sendMail} = require('../include/NodemailerConfig');
const {generateOtp} = require('../include/OtpGen');
const e = require('express');
const bcrypt = require('bcrypt');
router.post('/signinuser', (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	console.log(email);
	(async () => {
		try {
			//const query = 'SELECT * FROM your_table';
			const results = await SELECT('user');
			console.log(results);
		} catch (error) {
			console.error('Error executing query:', error);
		}
	})();

	res.send('success');
	// // console.log(email);
	// User.findAll({
	// 	where: {
	// 		email: email,
	// 	},
	// })
	// 	.then((result) => {
	// 		console.log(result);
	// 		if (result.length == 0) {
	// 			res.send('Please check email');
	// 		}
	// 		{
	// 			bcrypt.compare(password, result[0].password, async (err, result_2) => {
	// 				if (result_2) {
	// 					if (result[0].status != 'verified') {
	// 						const otp = generateOtp(6);
	// 						User.update(
	// 							{status: otp},
	// 							{
	// 								where: {
	// 									email: email,
	// 								},
	// 							}
	// 						);
	// 						var mailStatus = sendMail(otp, email);
	// 						res.send('Not verified');
	// 					} else {
	// 						var lang = 0;
	// 						var long = 0;
	// 						const type = result[0].userRole;
	// 						const userID = result[0].userId;
	// 						const payload = {
	// 							userId: result[0].userId,
	// 							password: result[0].password,
	// 							time: new Date(),
	// 						};
	// 						if (type == 'Customer') {
	// 							await vegan_user
	// 								.findAll({
	// 									raw: true,
	// 									where: {
	// 										userId: userID,
	// 									},
	// 								})
	// 								.then((result) => {
	// 									(lang = result[0].latitude), (long = result[0].longitude);
	// 								});
	// 						}
	// 						const secretKey = 'Avishka';
	// 						const token = jwt.sign(payload, secretKey, {expiresIn: '10h'});
	// 						const response = {type, token, userID, lang, long};
	// 						res.send(response);
	// 					}
	// 				} else {
	// 					res.send('Please check password');
	// 				}
	// 			});
	// 		}
	// 	})
	// 	.catch((error) => {
	// 		console.error('Failed to retrieve data : ', error);
	// 	});
});
router.post('/registeruser', (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	const otp = generateOtp(6);

	sendMail(otp, email);
	bcrypt.hash(password, 10, (err, hash) => {
		if (err) {
			res.send({type: 'error', message: 'An error occured. Try again later'});
		} else {
			QUERY("SELECT * FROM user WHERE user_name='" + email + "'").then((result) => {
				if (result.length == 0) {
					QUERY("INSERT INTO user(user_name,password) VALUES('" + email + "','" + password + "')");
					const otp = generateOtp(6);
				}
				console.log(result.length);
			});
			// User.findAll({
			// 	where: {
			// 		email: email,
			// 	},
			// }).then(async (result) => {
			// 	//console.log(result.length);
			// 	if (result.length == 0) {
			// 		await User.create({
			// 			email: email,
			// 			password: hash,
			// 			firstName: firstName,
			// 			lastName: lastName,
			// 			nic: nic,
			// 			userRole: userRole,
			// 			contactNo: contactNo,
			// 		});
			// 		const otp = generateOtp(6);
			// 		await User.update(
			// 			{status: otp},
			// 			{
			// 				where: {
			// 					email: email,
			// 				},
			// 			}
			// 		);
			// 		await User.findAll({
			// 			raw: true,
			// 			where: {
			// 				email: email,
			// 			},
			// 		}).then(async (result) => {
			// 			const userId = result[0].userId;
			// 			const role = result[0].userRole;
			// 			console.log(role);
			// 			if (role == 'Customer') {
			// 				await vegan_user.create({
			// 					userId: userId,
			// 					veganCategory: 'vegan',
			// 					latitude: latitude,
			// 					longitude: longitude,
			// 				});
			// 			} else if (role == 'Delivery') {
			// 				await delivery_person.create({
			// 					deliveryPersonId: userId,
			// 					latitude: latitude,
			// 					longitude: longitude,
			// 				});
			// 			}
			// 		});
			// 		var mailStatus = sendMail(otp, email);
			// 		//console.log(mailStatus);
			// 		res.send({type: 'success', message: 'Account created successfully'});
			// 		//res.send(mailStatus);
			// 	} else {
			// 		res.send({type: 'error', message: 'Email already exists'});
			// 	}
			// });
		}
	});
});
module.exports = router;

//rbyy ouxk ygpa btlw
