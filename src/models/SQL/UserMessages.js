const { DataTypes } = require("sequelize");

const MSQLDC_FetchENV = require("../../connection/MSQLDC_FetchENV");
const User = require("./User");

const UserMessages = MSQLDC_FetchENV().define("user-messages", {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: "user-messages",
});

UserMessages.belongsTo(User);

module.exports = UserMessages;
