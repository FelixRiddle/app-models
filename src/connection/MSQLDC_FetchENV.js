const Sequelize = require("sequelize");
const dotenv = require("dotenv");

// Setup dotenv
dotenv.config({
    path: ".env"
});

module.exports = function MSQLDC_FetchENV() {
    // Mysql information
    const MYSQL_NAME = process.env.DATABASE_NAME ?? process.env.MYSQL_DATABASE_NAME;
    const MYSQL_USERNAME = process.env.DATABASE_USERNAME ?? process.env.MYSQL_USERNAME ?? "root";
    const MYSQL_PASSWORD = process.env.DATABASE_PASSWORD ?? process.env.MYSQL_PASSWORD ?? "";
    const MYSQL_HOST = process.env.DATABASE_HOST ?? process.env.MYSQL_HOST ?? "localhost";
    const MYSQL_PORT = process.env.MYSQL_PORT ?? 3306;
    
    const mysqlConnection = new Sequelize(MYSQL_NAME, MYSQL_USERNAME, MYSQL_PASSWORD, {
        host: MYSQL_HOST,
        port: MYSQL_PORT,
        dialect: "mysql",
        define: {
            timestamps: true,
        },
        pool: {
            // The default is 5, so we have to forcefully set a high limit
            // 30 per processor seems ok, I have 16, hmmm this won't work if others have less processors.
            // I could fetch how many processors the computer has, but this problem is too tiny for my concern.
            max: 16 * 30,
            // Ten seconds
            acquire: 10 * 1000,
            // Five seconds of idling
            idle: 5 * 1000,
        },
        operatorAliases: false,
        // Disable logging
        logging: false
    });
    
    return mysqlConnection;
}
