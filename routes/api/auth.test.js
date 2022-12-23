require('dotenv').config();
const { DB_TEST_HOST, TEST_PORT } = process.env;
const mongoose = require('mongoose');
const app = require('../../app');
const { User } = require('../../models/users/index');
const request = require('supertest');

describe('test auth routes', () => {
  let server;

  beforeAll(() => {
    server = app.listen(TEST_PORT);
    mongoose.connect(DB_TEST_HOST);
  });

  afterAll(() => {
    mongoose.disconnect();
    server.close();
  });

  test('user login successfully', async () => {
    // arrange - підготовка
    // act - виконання
    // Assert - перевірка

    // Arrange
    const newUser = {
      password: '12345678',
      email: 'testUserLogin@mail.com',
    };

    const user = await User.create(newUser);

    // Act
    const userLoginData = {
      password: '12345678',
      email: 'testUserLogin@mail.com',
    };

    const response = await request(app)
      .post('/api/users/login')
      .send(userLoginData);

    // Assert
    expect(response.statusCode).toEqual(200);

    const { token } = response.body;

    expect(token).toEqual(expect.any(String));

    const userFromDB = await User.findById(user._id);

    expect(userFromDB.token).toEqual(token);

    await User.findByIdAndRemove(user._id);
  });
});
