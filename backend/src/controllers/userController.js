const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const logger = require('../config/logger');

require("dotenv").config();

const createUser = async (req, res) => {
  const password = req.body.password;
  const hashPassword = bcrypt.hashSync(password, 10);
  try {
    const createdUser = await userModel.createUser({
      ...req.body,
      password: hashPassword,
    });
    return res.status(201).json(createdUser);
  } catch (error) {
    logger.error(`Error creating user: ${error.message}`);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const enterUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.findUserByUsername(username);
    if (!user) {
      return res.status(401).json({ message: "Username or password incorrect" });
    }
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Username or password incorrect" });
    }
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h", // Token válido por 1 hora
      }
    );
    return res.status(200).json({ token });
  } catch (error) {
    logger.error(`Error logging in user: ${error.message}`);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  createUser,
  enterUser,
};
