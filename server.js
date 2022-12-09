const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
const app = require('./app');

const { DB_HOST, PORT } = process.env;

async function start() {
  try {
    await mongoose.connect(DB_HOST);

    console.log('Succsesfully connected to database');

    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
}

start();
