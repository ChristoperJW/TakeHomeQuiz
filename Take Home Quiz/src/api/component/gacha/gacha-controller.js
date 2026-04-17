/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
const gachaService = require('./gacha-service');
const { errorResponder, errorTypes } = require('../../../core/errors');
const { maskingName } = require('../../../utils/masking');

async function pullGacha(request, response, next) {
    try {
        const { username } = request.body;
        if (!username) {
            throw errorResponder(errorTypes.VALIDATION_ERROR, 'Username is required');
        }

        let user = await gachaService.getUserById(username);
        
        if (!user) {
            user = await gachaService.createUser(username, 0);
        }

        const currentQuota = user ? user.quota : 0;

        if (currentQuota >= 5){
            throw errorResponder(errorTypes.QUOTA_EXCEEDED, 'User quota exceeded in 1 day (5 times)');
        }

        const roll = Math.random();
        if (roll < 0.01) {
            const prize = "Emas 10 Gram";
            await gachaService.updatePrize(prize);
            await gachaService.updateUserQuota(user.username);
            await gachaService.addGachaHistory(user.username, prize);
            return response.status(200).json({
                message: `Congratulations! You won Emas 10 Gram!`,
            });
        }
        if (roll < 0.05) {
            const prize = "Smartphone X"; //
            await gachaService.updatePrize(prize);
            await gachaService.updateUserQuota(user.username);
            await gachaService.addGachaHistory(user.username, prize);
            return response.status(200).json({
                message: `Congratulations! You won Smartphone X!`,
            });
        }
        if (roll < 0.15) {
            const prize = "Smartwatch Y"; 
            await gachaService.updatePrize(prize);
            await gachaService.updateUserQuota(user.username);
            await gachaService.addGachaHistory(user.username, prize);
            return response.status(200).json({
                message: `Congratulations! You won Smartwatch Y!`,
            });
        }
        if (roll < 0.40) {
            const prize = "Voucher Rp100.000";
            await gachaService.updatePrize(prize);
            await gachaService.updateUserQuota(user.username);
            await gachaService.addGachaHistory(user.username, prize);
            return response.status(200).json({
                message: `Congratulations! You won Voucher 100 Ribu!`,
            });

        }
        if (roll < 0.70) {
            const prize = "Pulsa Rp50.000"; 
            await gachaService.updatePrize(prize);
            await gachaService.updateUserQuota(user.username);
            await gachaService.addGachaHistory(user.username, prize);
            return response.status(200).json({
                message: `Congratulations! You won Pulsa 50 Ribu!`,
            });

        }
        const prize = "Zonk";
        await gachaService.updateUserQuota(user.username);
        await gachaService.addGachaHistory(user.username, prize);
        return response.status(200).json({
            message: `Sorry, you didn't win any prize. Better luck next time!`,
        });

    } catch (error) {
        return next(error);
    }
}

async function getGachaHistory(request, response, next) {
    try {
        const { username } = request.params;
        return response.status(200).json({
            message: `Gacha history retrieved successfully!`,
            data: await gachaService.getGachaHistory(username),
        });
    } catch (error) {
        return next(error);
    }
}

async function getGachaPrizes(request, response, next) {
    try {
        return response.status(200).json({
            message: `Gacha prizes retrieved successfully!`,
            data: await gachaService.getGachaPrizes(),
        });
    } catch (error) {
        return next(error);
    }
}

async function getGachaPrizeWinners(request, response, next) {
    try {
        const winners = await gachaService.getGachaPrizeWinners(); 

        // 'winners' di sini adalah Array of Objects
        const maskedWinners = winners.map(win => ({
            username: maskingName(win.username), // Tetap di-masking satu per satu
            prizeWon: win.prizeWon,
            winningDate: win.createdAt
        }));

        return response.status(200).json({
            status: "success",
            totalWinners: maskedWinners.length, // Opsional: Beri info jumlah pemenang
            data: maskedWinners,
        });
    } catch (error) {
        return next(error);
    }
}



module.exports = {
    pullGacha,
    getGachaHistory,
    getGachaPrizes,
    getGachaPrizeWinners,
};