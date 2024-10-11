const sgMail = require("@sendgrid/mail");
require("dotenv").config();
const { SG_KEY } = process.env;

sgMail.setApiKey(SG_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "akulinaakulenko@gmail.com" };
  await sgMail.send(email);
  return true;
};

//const sendEmail =   {
//     to: "test@example.com", // Change to your recipient
//     from: "akulinaakulenko@gmail.com", // Change to your verified sender
//     subject: "Sending with SendGrid is Fun",
//     text: "and easy to do anywhere, even with Node.js",
//     html: "<strong>and easy to do anywhere, even with Node.js</strong>",
//   };

// sgMail
//   .send(msg)
//   .then(() => {
//     console.log("Email sent");
//   })
//   .catch((error) => {
//     console.error(error);
//   });

module.exports = sendEmail;
