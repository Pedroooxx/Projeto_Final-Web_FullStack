const express = require('express');
const router = require('./router');
const cors = require('cors');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const compressionOptions = require('./config/compression');

const app = express();

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 50,
  message: "Too many requests from this IP, please try again later."
});

app.use(cors());
app.use(express.json());
app.use(compression(compressionOptions));
app.use(limiter);
app.use(router);

module.exports = app;
