const mysql = require('mysql2');
const dotenv = require('dotenv');
const config = require('./config');


// dotenv.config();

// // Debugging to ensure environment variables are loaded
// console.log('Database Configuration:', {
//   host: process.env.HOST,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE
// });
const pool = mysql.createPool({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
});

pool.getConnection((err, connection) => {
  if (err) {
    console.log(`Failed to connect to database: ${err.message}`);
    return;
  }
  console.log("Connected successfully");

  pool.query('SELECT * FROM users', (err, result) => {
    if (err) {
      console.log("Error while executing query:", err.message);
      return;
    }
    console.log(result);
    connection.release();
  });
});

module.exports = pool;