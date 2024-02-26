const { DataTypes } = require("sequelize");

const MSQLDC_FetchENV = require("../../connection/MSQLDC_FetchENV");
const Property = require("./Property");

const Category = MSQLDC_FetchENV().define("category", {
    name: {
        type: DataTypes.STRING(128),
        allowNull: false,
    }
}, {
    tableName: "category",
});

Property.belongsTo(Category);

module.exports = Category;
