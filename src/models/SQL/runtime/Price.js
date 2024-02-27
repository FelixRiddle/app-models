const { DataTypes } = require("sequelize");

const mysqlConn = require("../../../connection/mysqlConn");

function Price() {
    const Model = mysqlConn().define("price", {
        name: {
            type: DataTypes.STRING(128),
            allowNull: false,
        }
    }, {
        tableName: "price",
    });
    
    return Model;
}

module.exports = Price;
