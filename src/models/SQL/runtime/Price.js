const { DataTypes } = require("sequelize");

const mysqlConn = require("../../../connection/mysqlConn");
const Property = require("./Property");

function Price() {
    const model = mysqlConn().define("price", {
        name: {
            type: DataTypes.STRING(128),
            allowNull: false,
        }
    }, {
        tableName: "price",
    });
    
    Property().belongsTo(model);
    
    return model;
}

module.exports = Price;
