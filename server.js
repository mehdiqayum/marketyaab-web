const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Middleware to parse JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST route to handle form submission
app.post('/send_email', (req, res) => {
    const { firstname, lastname, email, phone, service, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'support@marketyaab.com', // Your Gmail email address
            pass: 'Supportmarketyaab@789' // Your Gmail password
        }
    });

    // Email content
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'support@marketyaab.com',
        subject: `New message from ${firstname} ${lastname}`,
        text: `Name: ${firstname} ${lastname}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage:\n${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('Error: Unable to send message.');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Message sent successfully!');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
