module.exports = {
    HOST: "192.168.1.65",
    USER: "postgres",
    PASSWORD: "postgres",
    DB: "caregiverconnect",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };