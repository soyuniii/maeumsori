const { colors } = require('./src/styles/colors');

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "Pretendard-Medium": ["Pretendard-Medium"],
        "Pretendard-Regular": ["Pretendard-Regular"],
        "Pretendard-SemiBold": ["Pretendard-SemiBold"],
      },
      colors: {
        white: colors.white,
        black: colors.black,
        puppy: colors.puppy,
        monotone: colors.monotone,
      },
    },
  },
  plugins: [],
}