const { connection } = require("./connection");
const logger = require('../config/logger');

const createUser = async (user) => {
  const { username, password } = user;
  const query = "INSERT INTO users(username, password) VALUES (?, ?)";
  try {
    const [createdUser] = await connection.execute(query, [username, password]);
    return { insertId: createdUser.insertId };
  } catch (error) {
    logger.error(`Error creating user: ${error.message}`);
    throw error;
  }
};

const isUsernameTaken = async (username) => {
  const query = "SELECT COUNT(*) AS count FROM users WHERE username = ?";
  try {
    const [rows] = await connection.execute(query, [username]);
    return rows[0].count > 0;
  } catch (error) {
    logger.error(`Error checking username: ${error.message}`);
    throw error;
  }
};

const findUserByUsername = async (username) => {
  const query = "SELECT * FROM users WHERE username = ?";
  try {
    const [rows] = await connection.execute(query, [username]);
    return rows[0];
  } catch (error) {
    logger.error(`Error finding user by username: ${error.message}`);
    throw error;
  }
};

module.exports = {
  createUser,
  isUsernameTaken,
  findUserByUsername,
};
