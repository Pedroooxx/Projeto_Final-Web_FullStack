const winston = require('winston');
const path = require('path');

// Define o formato dos logs
const logFormat = winston.format.printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

const logger = winston.createLogger({
  level: 'info', // Pode ser 'debug', 'info', 'warn', 'error'
  format: winston.format.combine(
    winston.format.timestamp(),
    logFormat
  ),
  transports: [
    new winston.transports.Console(), // Logs no console
    new winston.transports.File({ filename: path.join(__dirname, '../../logs/combined.log') }), // Logs em arquivo
    new winston.transports.File({ filename: path.join(__dirname, '../../logs/errors.log'), level: 'error' }) // Apenas logs de erro em arquivo separado
  ],
});

module.exports = logger;
