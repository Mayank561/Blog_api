const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

module.exports = connection;


// const mysql = require('mysql2');


// // sql connection
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'blog'
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//     return;
//   }
//   console.log('Connected to the MySQL database.');
// });

// module.exports = connection;


// host: 'roundhouse.proxy.rlwy.net',
  // user: 'root',
  // password: 'cLvhJMtEZuKyAXPdSHEGoRrMQChpLlxj',
  // database: 'blog',
  // port: 17940,
  // connectTimeout: 10000 // Increase timeout to 10 seconds
// MYSQLDATABASE:'blog',
// MYSQLHOST:'roundhouse.proxy.rlwy.net',
// MYSQLPASSWORD:'cLvhJMtEZuKyAXPdSHEGoRrMQChpLlxj',
// MYSQLPORT: 17940,
// MYSQLUSER:'root',
// MYSQL_DATABASE:'blog',
// MYSQL_PRIVATE_URL:'mysql://root:cLvhJMtEZuKyAXPdSHEGoRrMQChpLlxj@mysql.railway.internal:3306/railway',
// MYSQL_ROOT_PASSWORD:'cLvhJMtEZuKyAXPdSHEGoRrMQChpLlxj',
// MYSQL_URL:'mysql://root:cLvhJMtEZuKyAXPdSHEGoRrMQChpLlxj@roundhouse.proxy.rlwy.net:17940/railway'