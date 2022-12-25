const { createError, sendEmail } = require('../../helpers');
const { User } = require('../../models/users');

const { BASE_URL } = process.env;

async function resendVerificationController(req, res) {
  const { email } = req.body;

  const user = User.findOne(email);

  if (!user) {
    throw createError({ status: 404 });
  }

  if (user.verify) {
    throw createError({
      status: 400,
      message: 'Verification has already been passed',
      code: 'USER_ALREADY_VERIFIED',
    });
  }

  const message = {
    to: email,
    subject: 'Email verification',
    html: `<a href="${BASE_URL}/api/users/verify/${user.verificationToken}">Click to verify your email</a>`,
  };

  await sendEmail(message);

  res.json({ message: 'Email was resend succsesfully' });
}
module.exports = resendVerificationController;
