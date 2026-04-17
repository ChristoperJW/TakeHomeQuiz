// Masking name (internet method)

const maskName = (name) => {
  if (!name) return '';

  return name
    .split('')
    .map((char, index) => {
      // Keep spaces as they are
      if (char === ' ') return ' ';

      // Requirement: Disguise randomly (e.g., J****oe or *oh* $D^{*}e$)
      // We can keep the first character and use Math.random() for the rest
      if (index === 0) return char;

      // 70% chance to mask with '*' or other symbols mentioned in the quiz
      const symbols = ['*', '*', '*', '$', '^'];
      const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];

      return Math.random() > 0.3 ? randomSymbol : char;
    })
    .join('');
};

module.exports = { maskName };
