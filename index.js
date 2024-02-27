// Connections
const MSQLDC_FetchENV = require("./src/connection/MSQLDC_FetchENV");
const mysqlConn = require("./src/connection/mysqlConn.js");
const MySQLDatabaseConnection = require("./src/connection/MySQLDatabaseConnection.js");

const printMysqlEnvironmentVariables = require("./src/env/printMysqlEnvironmentVariables.js");

const {
    Category,
    DebugPropertyImageUpload,
    Price,
    Property,
    User,
    UserMessages,
} = require("./src/models/SQL/runtime/index.js");
const MODEL = require("./src/models/SQL/index.js");

module.exports = {
    // Connectors
    // To connect to the database
    MSQLDC_FetchENV,
    mysqlConn,
    MySQLDatabaseConnection,
    
    // Debug
    printMysqlEnvironmentVariables,
    
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
