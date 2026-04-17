module.exports = (mongoose) => {
  const HadiahSchema = new mongoose.Schema(
    {
      // Kamu HARUS mendefinisikan field di sini agar Mongoose mau membacanya
      name: {
        type: String,
        required: true,
      },
      sisa: {
        type: Number,
        default: 0,
      },
    },
    {
      timestamps: true, // Opsional: Biar tahu kapan data dibuat
    }
  );

  return mongoose.model('Hadiah', HadiahSchema);
};
