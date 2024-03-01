require('dotenv').config({ path: '../../credentials.env' });
module.exports = {
    HOST: "localhost",
    USER: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    DB: "efda",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };