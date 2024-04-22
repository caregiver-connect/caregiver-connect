module.exports = (sequelize, Sequelize) => {
    const Provider = sequelize.define("provider", {
        place_id: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        id_cms_other: {
            type: Sequelize.STRING
        },
        addr1: {
            type: Sequelize.STRING
        },
        addr2: {
            type: Sequelize.STRING
        },
        agency_name: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        county: {
            type: Sequelize.STRING
        },
        data_source: {
            type: Sequelize.STRING
        },
        date_last_updated: {
            type: Sequelize.DATE
        },
        default_service_area_type: {
            type: Sequelize.STRING
        },
        notes: {
            type: Sequelize.STRING
        },
        ownership_type: {
            type: Sequelize.STRING
        },
        phone_number: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        service_area_entities: {
            type: Sequelize.STRING
        },
        service_area_polygon: {
            type: Sequelize.STRING
        },
        state: {
            type: Sequelize.STRING
        },
        website: {
            type: Sequelize.STRING
        },
        zip: {
            type: Sequelize.STRING
        },
        resources_JSON: {
            type: Sequelize.TEXT
        },
        resources_text: {
            type: Sequelize.TEXT
        },
        coordinates: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false // Disable createdAt and updatedAt columns
    });

    return Provider;
};
