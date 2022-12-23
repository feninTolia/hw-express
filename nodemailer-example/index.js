require('dotenv').config();
const { META_UA_PASSWORD } = process.env;

const nodemailer = require('nodemailer');

const config = {
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: 'fenintolia@meta.ua',
    pass: META_UA_PASSWORD,
  },
};

const transport = nodemailer.createTransport(config);

const message = {
  to: 'fenintolja@gmail.com',
  from: 'fenintolia@meta.ua',
  subject: 'test subject',
  text: 'Some email plain text',
};

transport
  .sendMail(message)
  .then(() => {
    console.log('Email sended succsessfully');
  })
  .catch((err) => {
    console.error(err);
  });
