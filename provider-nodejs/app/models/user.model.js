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
        approved: {
            type: Sequelize.INTEGER
        },
        denied: {
            type: Sequelize.INTEGER
        },
        verified: {
            type: Sequelize.BOOLEAN
        },
        role: {
            type: Sequelize.STRING // roles are untrusted, trusted, and admin
        },
    }, {
        timestamps: true // Enable timestamps
    });
  
    return User;
};
