// models/Inclusion.js

const { UUIDV4 } = require("sequelize");


const Inclusion = (sequelize, DataTypes) =>  sequelize.define('Inclusion', {
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
        type: DataTypes.TEXT,
        allowNull: false,
    },
    service_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'services',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
}, {
    tableName: 'inclusions',
    timestamps: false,
    underscored: false,
});

module.exports = Inclusion;
