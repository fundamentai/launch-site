const defaultTheme = require("tailwindcss/defaultTheme");

// Custom color with css variable color in __theme_color.scss
function customColors(cssVar) {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${cssVar}), ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(${cssVar}), var(${opacityVariable}, 1))`;
    }
    return `rgb(var(${cssVar}))`;
  };
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xl: "40px",
        "2xl": "128px",
      },
    },

    extend: {
      colors: {
        primary: {
          50: customColors("#fffce0"),
          100: customColors("#fff8b3"),
          200: customColors("#fff380"),
          300: customColors("#ffea4d"),
          400: customColors("#ffd600"),
          500: customColors("#e6c200"),
          600: customColors("#b38f00"),
          700: customColors("#806600"),
          800: customColors("#4d3d00"),
          900: customColors("#1a1a00"),
        },
        secondary: {
          50: customColors("#ffffcc"),
          100: customColors("#ffff99"),
          200: customColors("#ffff66"),
          300: customColors("#ffff33"),
          400: customColors("#ffff00"),
          500: customColors("#e6e600"),
          600: customColors("#b3b300"),
          700: customColors("#808000"),
          800: customColors("#4d4d00"),
          900: customColors("#1a1a00"),
        },
        neutral: {
          50: customColors("#f5f5f5"),
          100: customColors("#e0e0e0"),
          200: customColors("#cccccc"),
          300: customColors("#b3b3b3"),
          400: customColors("#999999"),
          500: customColors("#666666"),
          600: customColors("#4d4d4d"),
          700: customColors("#333333"),
          800: customColors("#1a1a1a"),
          900: customColors("#000000"),
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
