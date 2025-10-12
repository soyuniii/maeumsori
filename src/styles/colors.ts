const colors = {
  white: "#ffffff",
  black: "#191919",
  puppy: {
    100: "#FFF8E7",
    200: "#FFE4A3",
    300: "#788B6B",
    400: "#3F5B2C"
  },
  monotone: {
    100: "#FCFCFD",
    200: "#D9D9D9",
    300: "#A4A4A4",
  },
} as const;

export { colors };

module.exports = { colors };
