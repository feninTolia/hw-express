const Jimp = require('jimp');
const { User } = require('../../models/users');

const uploadController = async (req, res, next) => {
  const { filename: avatarFileName } = req.file;
  const { _id: userId } = req.user;
  console.log(userId);

  Jimp.read(`./tmp/${avatarFileName}`)
    .then((avatar) => {
      return avatar
        .cover(250, 250)
        .grayscale()
        .quality(75)
        .write(`./public/avatars/${avatarFileName}`);
    })
    .catch((err) => {
      console.error(err);
    });

  await User.findByIdAndUpdate(userId, {
    avatarURL: `/avatars/${avatarFileName}`,
  });

  res.json({ avatarURL: `/avatars/${avatarFileName}` });
};

module.exports = uploadController;
