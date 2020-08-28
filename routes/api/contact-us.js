const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "gracegiverlittletots@gmail.com",
      pass: "grace2020"
    }
  });

console.log("world")
router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `
  

  var mail = {
    from: name,
    to: 'gracegiverlittletots@gmail.com',
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err) => {
    if (err) {
      res.json({
        status: 'failure to send'
      })
      console.log(err);
    } else {
      res.json({
       status: 'success! message was sent to the Grace Givers Team!'
      })
    }
  });
});

module.exports = router;