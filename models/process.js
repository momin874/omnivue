// models/Process.js
const { UUIDV4 } = require('sequelize');

const Process = (sequelize, DataTypes) => sequelize.define('Process', {
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
    order: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'processes',
    timestamps: false,
    underscored: false,
});

module.exports = Process;
