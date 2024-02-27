const MSQLDC_FetchENV = require("./MSQLDC_FetchENV");

/**
 * Alias for MSQLDC_FetchENV, which is pretty confusing
 */
module.exports = function mysqlConn() {
    return MSQLDC_FetchENV();
}
