/* eslint-disable prettier/prettier */
const express = require('express');

const gachaController = require('./gacha-controller');

const route = express.Router();

module.exports = (app) => {
    app.use('/gacha', route);
    
    route.post('/pull', gachaController.pullGacha);
    route.get('/history/:username', gachaController.getGachaHistory);
    route.get('/prizes', gachaController.getGachaPrizes);
    route.get('/prizewinners', gachaController.getGachaPrizeWinners);

}