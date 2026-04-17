const maskingName = (name) => {
  if (!name) return '***';
  const len = name.length;
  if (len <= 2) return `${name[0]}*`;

  // Ambil huruf pertama dan terakhir, sisanya ganti bintang
  return name[0] + '*'.repeat(len - 2) + name[len - 1];
};

module.exports = { maskingName };
