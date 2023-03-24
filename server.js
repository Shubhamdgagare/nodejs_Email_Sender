const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'deadpoolssfather@gmail.com',
        pass: 'dssrkdcsswdeeseo'
    }
});

// setup email data
let mailOptions = {
    from: 'deadpoolssfather@gmail.com',
    to: 'shubhamd.gagare@gmail.com',
    subject: 'Subject line of the email',
    text: 'Email message text'
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});