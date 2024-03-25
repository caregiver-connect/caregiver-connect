module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        username: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        password: {
            type: Sequelize.STRING
        },
        phone_number: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        county: {
            type: Sequelize.STRING
        },
    }, {
        timestamps: false // Enable timestamps
    });
  
    return User;
};
