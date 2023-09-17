var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
	service: 'gmail',
	host: 'smtp.gmail.com',
	auth: {
		user: 'sritelcommunications@gmail.com',
		pass: 'rbyyouxkygpabtlw',
	},
	tls: {
		rejectUnauthorized: false,
	},
	secure: false,
});
async function SendMail(otp, email) {
	return new Promise((resolve, reject) => {
		var mailOptions = {
			from: 'sritelcommunications@gmail.com',
			to: email,
			subject: 'Verify your email',
			text: otp,
		};
		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				resolve('error');
			} else {
				resolve('emailsent');
			}
		});
	});
}
module.exports = {SendMail};
