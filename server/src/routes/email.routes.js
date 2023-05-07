const router = require("express").Router();
const sendEmail = require("../email/email");



router.post("/contact",  (req, res) => {

    const {name,email,subject,message} = req.body;

    
    const mail = {
      from: name,
      to: "26life72@gmail.com",
      subject: "A customer is waiting",
      html: `
              <p>Name: ${name}</p>
              <p>Email: ${email}</p>
              <p>Subject: ${subject}</p>
              <p>MessageP: ${message}</p>
          `,
    };
   sendEmail(mail);
  });

  module.exports = router;