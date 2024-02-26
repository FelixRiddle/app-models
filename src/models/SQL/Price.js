const { DataTypes } = require("sequelize");

const MSQLDC_FetchENV = require("../../connection/MSQLDC_FetchENV");
const Property = require("./Property");

const Price = MSQLDC_FetchENV().define("price", {
    name: {
        type: DataTypes.STRING(128),
        allowNull: false,
    }
}, {
    tableName: "price",
});

Property.belongsTo(Price);

module.exports = Price;
