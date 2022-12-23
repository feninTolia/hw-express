require('dotenv').config();
const { SENDGRID_KEY } = process.env;

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(SENDGRID_KEY);

const message = {
  to: 'fenintolja@gmail.com',
  from: 'fenintolja@gmail.com',
  subject: 'Test sendgrid subj',
  html: '<h1>some plain text from sandgrid</h1>',
};

sgMail
  .send(message)
  .then(() => {
    console.log('mail sended via sandgrid');
  })
  .catch((err) => {
    console.error(err.response.body);
  });
