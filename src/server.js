const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const config = require('./config/config');

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// POST Route
app.post('/send', (req, res) => {
  const { name, lastname, email, telephone, message } = req.body;

  // Create SMTP transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.MAIL,
      pass: config.PASSWORD
    }
  });

  // Create email message
  const mailOptions = {
    from: email,
    to: 'christianbork.work@gmail.com',
    text: `
      Name: ${name} ${lastname}
      Email: ${email}
      Telephone: ${telephone}
      Message: ${message}
    `
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Something went wrong.');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent.');
    }
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
