// models/Service.js

const { UUIDV4 } = require("sequelize");


const Service = (sequelize, DataTypes) => sequelize.define('Service', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    slogan: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    path: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    service_image_url: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'services',
    timestamps: false,
    underscored: false,
});

module.exports = Service;
