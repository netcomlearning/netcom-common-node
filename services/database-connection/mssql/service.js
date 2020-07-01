const sql = require('mssql');

exports.mssqlconnect = async (connectionString) => {
    try {
        let pool = await sql.connect(connectionString);
        return pool;
    } catch (err) {
        throw new Error(err);
    }
}

sql.on('error', err => {
    console.log('Ms Sql Connection errored out' + error);
})