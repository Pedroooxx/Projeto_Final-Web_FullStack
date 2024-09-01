const logger = require('../config/logger');

const validateBody = (req, res, next) => {
  const { body } = req;

  if (!body.name || body.name.trim() === '') {
    logger.warn('Validation error: Character name is required.');
    return res.status(400).json({ message: "Nome do Personagem necessário." });
  }
  if (!body.fullname || body.fullname.trim() === '') {
    logger.warn('Validation error: Character full name is required.');
    return res.status(400).json({ message: "Nome completo do Personagem necessário." });
  }
  if (!body.house || body.house.trim() === '') {
    logger.warn('Validation error: Character house is required.');
    return res.status(400).json({ message: "Casa do Personagem necessária." });
  }
  if (!body.status || body.status.trim() === '') {
    logger.warn('Validation error: Character status is required.');
    return res.status(400).json({ message: "Status do Personagem necessário." });
  }

  next();
};

module.exports = {
  validateBody,
};
