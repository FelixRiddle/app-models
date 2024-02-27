const { DataTypes } = require("sequelize");

const mysqlConn = require("../../../connection/mysqlConn");
const Property = require("./Property");

/**
 * Runtime definition
 * 
 * @returns 
 */
function Category() {
    const model = mysqlConn().define("category", {
        name: {
            type: DataTypes.STRING(128),
            allowNull: false,
        }
    }, {
        tableName: "category",
    });
    
    Property().belongsTo(model);
    
    return model;
}

module.exports = Category;
