const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        // your email id  
        user: '',
        // your 2 fac auth generated password from gmail with 12 character
        pass: ''
    }
});

// setup email data
let mailOptions = {
    // your email id 
    from: '',
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