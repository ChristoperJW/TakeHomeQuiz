/* eslint-disable no-unused-vars */
// eslint-disable-this-file no-unused-vars
const { get } = require('mongoose');
const { GachaHistory, Hadiah, User } = require('../../../models');
const { maskedname } = require('../../../utils/masking');

async function updatePrize(prizeName) {
  return Hadiah.updateOne({ name: prizeName }, { $inc: { sisa: -1 } });
}
async function getUserById(username) {
  return User.findOne({ username });
}

async function createUser(username, quota) {
  return User.create({ username, quota });
}

async function updateUserQuota(username) {
  return User.updateOne({ username }, { $inc: { quota: 1 } });
}

async function addGachaHistory(userId, prize) {
  return GachaHistory.create({ username: userId, prizeWon: prize });
}

async function getGachaHistory(username) {
  return GachaHistory.find({ username });
}

async function getGachaPrizes() {
  return Hadiah.find({});
}

async function getGachaPrizeWinners() {
  return GachaHistory.find({
    prizeWon: { $ne: 'Zonk' },
  }).sort({ createdAt: -1 });
}

module.exports = {
  updatePrize,
  updateUserQuota,
  addGachaHistory,
  getGachaHistory,
  getGachaPrizes,
  getGachaPrizeWinners,
  getUserById,
  createUser,
};
