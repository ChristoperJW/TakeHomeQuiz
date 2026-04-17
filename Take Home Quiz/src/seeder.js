/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
const { Hadiah, GachaHistory, User } = require('./models');

const seedAll = async () => {
  try {
    console.log("♻️  Resetting & Syncing Database...");

    // AUTO-DELETE: Hapus semua data lama agar fresh saat restart
    await Hadiah.deleteMany({});
    await GachaHistory.deleteMany({});
    await User.deleteMany({});

    // 1. Seed Hadiah (Stok Awal)
    const prizes = [
      { name: "Emas 10 gram", sisa: 1 },
      { name: "Smartphone X", sisa: 3 }, // Sisa 3 karena 2 sudah dimenangkan dummy
      { name: "Smartwatch Y", sisa: 9 }, // Sisa 9 karena 1 sudah dimenangkan dummy
      { name: "Voucher Rp100.000", sisa: 100 },
      { name: "Pulsa Rp50.000", sisa: 500 }
    ];
    await Hadiah.insertMany(prizes);

    // 2. Seed Users (Dummy + Kamu)
    // Supaya tersinkron, kita buat user yang sesuai dengan history
    await User.insertMany([
      { username: "Budi_Santoso", quota: 1 },
      { username: "Susi_Susanti", quota: 1 },
      { username: "Andi_Wijaya", quota: 1 },
      { username: "Christoper", quota: 0 } // Kamu mulai dari nol
    ]);

    // 3. Seed History (Dummy Winners)
    await GachaHistory.insertMany([
      { username: "Budi_Santoso", prizeWon: "Smartphone X", status: "WIN" },
      { username: "Susi_Susanti", prizeWon: "Smartphone X", status: "WIN" },
      { username: "Andi_Wijaya", prizeWon: "Smartwatch Y", status: "WIN" }
    ]);

    console.log("✅ Database Fresh & Synced!");
  } catch (err) {
    console.error("❌ Seeding Error:", err);
  }
};

module.exports = seedAll;