// const sql = require('mssql/msnodesqlv8');

// const config = {
//   //connectionString: 'Driver=SQL Server;Server=SERVERN\\SQLEXPRESS;Database=TEST;Trusted_Connection=true;'
//   connectionString: 'Driver=SQL Server;Server=THINKPAD\\BARTENDER;Database=TEST;Trusted_Connection=true;'
// };

// // run a query
// async function runQuery(rawSQL, configData = config) {
//   try {
//     let pool = await sql.connect(configData)
//     let result = await pool.request()
//     .query(rawSQL)
//     console.dir(result.recordsets)
//     return result;
//   } catch (err) {
//     console.log('error', err)
//   }
// }

//   // // create Request object
//   // var request = new sql.Request();
//   // request.query('select * from dbo.csvImport'

//   module.exports = {
//     runQuery
//   }
