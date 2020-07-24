const { mssqlconnect } = require('./services/database-connection/mssql/service');
const { sendRequest } = require('./services/request-service/axios/service');

exports.mssqlconnect = mssqlconnect;
exports.sendRequest = sendRequest;