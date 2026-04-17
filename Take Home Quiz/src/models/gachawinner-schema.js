module.exports = (mongoose) => {
  const GachaHistorySchema = new mongoose.Schema({
    username: { type: String, required: true },
    prizeWon: { type: String, required: true }, // Simpan nama hadiahnya
    status: { type: String }, // Misal: "WIN" atau "ZONK"
    createdAt: { type: Date, default: Date.now },
  });
  return mongoose.model('GachaHistory', GachaHistorySchema);
};
