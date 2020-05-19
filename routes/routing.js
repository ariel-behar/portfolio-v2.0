const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const router = express.Router();

let urlencodedParser = bodyParser.urlencoded({ extended: false });
let bodyParserJSON = bodyParser.json();

router.get('/', (req, res) => {
    res.render('index');
});

//Dotenv used to hide email and password credentials
dotenv.config();

router.post('/', urlencodedParser, async (req, res) => {
    const output = `
        <p>You have a new contact request!</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Subject: ${req.body.subject}</li>
            <li>Message: ${req.body.message}</li>
        </ul>
    `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL, // generated ethereal user
            pass: process.env.PASSWORD, // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"www.arielbehar.com" PORTFOLIO SITE', // sender address
        to: 'ariel.behar@hotmail.com', // list of receivers
        subject: 'Portfolio Site Submission', // Subject line
        text: 'Hello world?', // plain text body
        html: output, // html body
    });

    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: %s', info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        }
    });
});

module.exports = router;
