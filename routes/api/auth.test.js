require('dotenv').config();
const { DB_TEST_HOST, TEST_PORT } = process.env;
const mongoose = require('mongoose');
const app = require('../../app');
const { User } = require('../../models/users/index');
const request = require('supertest');
const { randomUUID } = require('crypto');
const { sendEmail } = require('../../helpers');

describe('test auth routes', () => {
  let server;

  beforeAll(async () => {
    server = app.listen(TEST_PORT);
    mongoose.connect(DB_TEST_HOST);
    await User.findOneAndRemove({ email: 'testUserLogin@mail.com' });
  });

  afterAll(() => {
    mongoose.disconnect();
    server.close();
  });

  test('verifued user login successfully', async () => {
    // Arrange - підготовка
    const verificationToken = randomUUID();

    const newUser = {
      email: 'testUserLogin@mail.com',
      password: '12345678',
      verificationToken,
    };

    const user = await User.create(newUser);

    const message = {
      to: 'testUserLogin@mail.com',
      subject: 'Email verification',
      html: '<a href="{BASE_URL}/api/users/verify/{verificationToken}">Click to verify your email</a>',
    };

    try {
      await sendEmail(message);
    } catch (err) {
      console.error(err);
    }

    await User.findByIdAndUpdate(user._id, { verify: true });

    // Act - виконання
    const userLoginData = {
      password: '12345678',
      email: 'testUserLogin@mail.com',
    };

    const response = await request(app)
      .post('/api/users/login')
      .send(userLoginData);

    // Assert - перевірка
    expect(response.statusCode).toEqual(200);

    const { token } = response.body;

    expect(token).toEqual(expect.any(String));

    const userFromDB = await User.findById(user._id);

    expect(userFromDB.token).toEqual(token);
  });
});
