const { Schema, model, SchemaTypes } = require('mongoose');
// const { User } = require('../users/index');

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true, versionKey: false }
);

const Contact = model('contact', contactSchema);

module.exports = Contact;
