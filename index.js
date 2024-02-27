// Connections
const MSQLDC_FetchENV = require("./src/connection/MSQLDC_FetchENV");
const MySQLDatabaseConnection = require("./src/connection/MySQLDatabaseConnection.js");

// Models
const MODEL = require("./src/models/SQL/index");

const Category = require("./src/models/SQL/Category");
const DebugPropertyImageUpload = require("./src/models/SQL/DebugPropertyImageUpload");
const Price = require("./src/models/SQL/Price");
const Property = require("./src/models/SQL/Property");
const User = require("./src/models/SQL/User");
const UserMessages = require("./src/models/SQL/UserMessages");

module.exports = {
    // Connectors
    // To connect to the database
    MSQLDC_FetchENV,
    MySQLDatabaseConnection,
    
    MODEL,
    
    // Default exports
    Category,
    DebugPropertyImageUpload,
    Price,
    Property,
    User,
    UserMessages,
}
