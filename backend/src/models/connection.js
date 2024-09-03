const mysql = require("mysql2/promise");
require("dotenv").config();

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 10,
  idleTimeout: 60000
});

const { createClient } = require("@redis/client");

const redisClient = createClient({
    url: 'redis://localhost:6379',
  });
  
redisClient.on('error', (err) => {
    console.error('Redis error:', err);
  });
  
redisClient.connect();

module.exports = {
    connection,
    redisClient
};
