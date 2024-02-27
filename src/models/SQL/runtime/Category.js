const { DataTypes } = require("sequelize");

const mysqlConn = require("../../../connection/mysqlConn");

/**
 * Runtime definition
 * 
 * @returns 
 */
function Category() {
    const Model = mysqlConn().define("category", {
        name: {
            type: DataTypes.STRING(128),
            allowNull: false,
        }
    }, {
        tableName: "category",
    });
    
    return Model;
}

module.exports = Category;
