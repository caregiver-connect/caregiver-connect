module.exports = {
    HOST: "172.27.0.1",
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