/**
 * Runtime models are functions, you call them, and you get the model.
 * 
 * This is so that 'mysqlConn' function can fetch variables from the environment.
 */
const Category = require("./Category");
const DebugPropertyImageUpload = require("./DebugPropertyImageUpload");
const Price = require("./Price");
const Property = require("./Property");
const UserMessages = require("./UserMessages");
const User = require("./User");

const MODEL = {
    Category,
    DebugPropertyImageUpload,
    Price,
    Property,
    UserMessages,
    User,
};

module.exports = MODEL;
