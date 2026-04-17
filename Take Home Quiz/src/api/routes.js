const express = require('express');

const gacha = require('./component/gacha/gacha-route');

module.exports = () => {
  const app = express.Router();

  gacha(app);

  return app;
};
