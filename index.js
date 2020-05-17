const express = require('express');
const hbs = require('hbs');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

//Starting point for modules for livereload
const livereload = require('livereload');
const connectLiveReload = require('connect-livereload');
// Ending point for modules for livereload

const app = express();

const PORT = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, './public/');
const viewsPath = path.join(__dirname, './templates/views/');
const partialsPath = path.join(__dirname, './templates/partials/');

// Starting point for code for livereload
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(publicDirectoryPath);
liveReloadServer.server.once('connection', () => {
    setTimeout(() => {
        liveReloadServer.refresh('/');
    }, 100);
});

app.use(connectLiveReload());
//Ending point for the code for livereload

let urlencodedParser = bodyParser.urlencoded({ extended: false });
let bodyParserJSON = bodyParser.json();

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/contact', urlencodedParser, async (req, res) => {
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
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'ariel-portfolio-site@hotmail.com', // generated ethereal user
            pass: 'A12344321B', // generated ethereal password
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

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
});

app.listen(PORT, (req, res) => {
    console.log(`Server is up on port: ${PORT}`);
});
