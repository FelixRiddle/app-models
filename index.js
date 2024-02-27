// Connections
const MSQLDC_FetchENV = require("./src/connection/MSQLDC_FetchENV");
const mysqlConn = require("./src/connection/mysqlConn.js");
const MySQLDatabaseConnection = require("./src/connection/MySQLDatabaseConnection.js");

const {
    Category,
    DebugPropertyImageUpload,
    Price,
    Property,
    User,
    UserMessages,
} = require("./src/models/SQL/index.js");
const MODEL = require("./src/models/SQL/index.js");

module.exports = {
    // Connectors
    // To connect to the database
    MSQLDC_FetchENV,
    mysqlConn,
    MySQLDatabaseConnection,
    
    // Module level initialization
    MODEL,
    
    // Default exports
    Category,
    DebugPropertyImageUpload,
    Price,
    Property,
    User,
    UserMessages,
}
