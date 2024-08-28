const connection = require("./connection");

const createUser = async (user) => {
  const { username, password } = user;
  const query = "INSERT INTO users(username, password) VALUES (?, ?)";
  const [createdUser] = await connection.execute(query, [username, password]);
  return { insertId: createdUser.insertId };
};

const isUsernameTaken = async (username) => {
  const query = "SELECT COUNT(*) AS count FROM users WHERE username = ?";
  const [rows] = await connection.execute(query, [username]);
  return rows[0].count > 0;
};

const findUserByUsername = async (username) => {
  const query = "SELECT * FROM users WHERE username = ?";
  const [rows] = await connection.execute(query, [username]);
  return rows[0];
};

module.exports = {
  createUser,
  isUsernameTaken,
  findUserByUsername,
};
