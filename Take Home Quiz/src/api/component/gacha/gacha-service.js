const gachaRepository = require('./gacha-repository');

async function updatePrize(Prize) {
  return gachaRepository.updatePrize(Prize);
}
async function getUserById(username) {
  return gachaRepository.getUserById(username);
}
async function createUser(username, quota) {
  return gachaRepository.createUser(username, quota);
}
async function updateUserQuota(username) {
  return gachaRepository.updateUserQuota(username);
}

async function addGachaHistory(username, prize) {
  return gachaRepository.addGachaHistory(username, prize);
}

async function getGachaHistory(username) {
  return gachaRepository.getGachaHistory(username);
}

async function getGachaPrizes() {
  return gachaRepository.getGachaPrizes();
}

async function getGachaPrizeWinners() {
  return gachaRepository.getGachaPrizeWinners();
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
