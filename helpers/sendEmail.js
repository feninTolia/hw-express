const sgMail = require('@sendgrid/mail');

const { SENDGRID_KEY, SENDGRID_REGISTRED_EMAIL } = process.env;

sgMail.setApiKey(SENDGRID_KEY);

async function sendEmail(data) {
  const message = {
    ...data,
    // change to env
    from: SENDGRID_REGISTRED_EMAIL,
  };

  await sgMail.send(message);
}

module.exports = sendEmail;
