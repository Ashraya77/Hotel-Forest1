// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        forest: {
          dark: "#2E5E4E",   // deep forest green
          DEFAULT: "#3F7D5C", // lush green
          light: "#A3C9A8",   // sage green
        },
        wood: {
          dark: "#5C4033",    // dark brown
          DEFAULT: "#8B5E3C", // warm wood
          light: "#DCC7AA",   // beige / sand
        },
        neutral: {
          light: "#F5F5F2",   // off-white
          medium: "#E1E1DD",  // light grey
          dark: "#2C2C2C",    // almost black
        },
        accent: {
          gold: "#C4A35A",    // golden oak
          sky: "#8FCBFF",     // soft sky blue
        },
      },
    },
  },
  plugins: [],
};
