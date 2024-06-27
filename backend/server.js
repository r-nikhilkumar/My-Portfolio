const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail", // or another email provider
  auth: {
    user: "thenikhilkumar1@gmail.com",
    pass: "ufyw jlav qpbn cvod",
  },
});

app.post("/send-email", (req, res) => {
  const { user_name, user_email, user_phone, message, hire } = req.body;
  const mailOptions = {
    from: user_email,
    to: "thenikhilkumar1@gmail.com",
    subject: `Portfolio Contact from ${user_name}`,
    html: `<p>Name: ${user_name}</p>
           <p>Email: ${user_email}</p>
           <p>Phone: ${user_phone}</p>
           <p>Message: ${message}</p>
           <p>hire: ${hire}</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent: " + info.response);
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
