const logger = require('../config/logger');

const userValidate = (req, res, next) => {
  const { body } = req;

  if (!body.username || body.username.trim() === '') {
    logger.warn('Validation error: Username is required.');
    return res.status(400).json({ message: "Nome de Usuário é necessário." });
  }
  if (!body.password || body.password.trim() === '') {
    logger.warn('Validation error: Password is required.');
    return res.status(400).json({ message: "Senha de Usuário é necessário." });
  }

  next();
};

module.exports = {
  userValidate,
};
