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
        verified: {
            type: Sequelize.BOOLEAN
        },
        role: {
            type: Sequelize.STRING // roles are banned, contributor, and admin
        },
    }, {
        timestamps: true // Enable timestamps
    });
  
    return User;
};
