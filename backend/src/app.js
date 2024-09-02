const express = require('express');
const router = require('./router');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 50,
  message: "Too many requests from this IP, please try again later."
});

app.use(cors());
app.use(express.json());
app.use(limiter);
app.use(router);

module.exports = app;
