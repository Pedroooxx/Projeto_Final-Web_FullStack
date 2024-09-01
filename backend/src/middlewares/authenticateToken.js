const jwt = require('jsonwebtoken');
const logger = require('../config/logger');
require('dotenv').config();

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Espera Bearer <token>

  if (!token) {
    logger.warn('Access denied: No token provided.');
    return res.status(401).json({ message: 'Accesso Negado' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    logger.error(`Invalid token: ${err.message}`);
    return res.status(403).json({ message: 'Acesso negado - Faça login' });
  }
};

module.exports = authenticateToken;
