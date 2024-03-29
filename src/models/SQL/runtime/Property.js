const { DataTypes } = require("sequelize");

const mysqlConn = require("../../../connection/mysqlConn");
const Category = require("./Category");
const Price = require("./Price");
const User = require("./User");

function Property() {
    const model = mysqlConn().define("property", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING(128),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        rooms: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        parking: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        bathrooms: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        street: {
            type: DataTypes.STRING(128),
            allowNull: false,
        },
        latitude: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        longitude: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        published: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    }, {
        tableName: "property",
    });
    
    model.belongsTo(new User());
    model.belongsTo(new Category());
    model.belongsTo(new Price());
    
    return model;
}

module.exports = Property;
