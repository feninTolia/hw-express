const sgMail = require('@sendgrid/mail');

const { SENDGRID_KEY } = process.env;

sgMail.setApiKey(SENDGRID_KEY);

async function sendEmail(data) {
  const message = {
    ...data,
    from: 'fenintolja@gmail.com',
  };

  await sgMail.send(message);
}

module.exports = sendEmail;
