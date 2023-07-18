const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      ...defaultTheme.borderRadius,
      pill: "100vmax",
      brand: "0.8rem",
    },

    screens: {
      s: "20em", // @media (min-width: 320px) { ... }
      xs: "30em", // @media (min-width: 480px) { ... }
      sm: "36em", // @media (min-width: 576px) { ... }
      sx: "40em", // @media (min-width: 640px) { ... }
      md: "48em", // @media (min-width: 768px) { ... }
      lg: "64em", // @media (min-width: 1024px) { ... }
      xl: "80em", // @media (min-width: 1280px) { ... }
      xxl: "96em", // @media (min-width: 1536px) { ... }
      xxxl: "112.5em", // @media (min-width: 1800px) { ... }
    },

    screens: {
      xs: "30em", // @media (min-width: 480px) { ... }
      ...defaultTheme.screens,
    },

    extend: {
      colors: {
        neutral: {
          100: "#FFFFFF",
        },
        brand: {
          100: "#5A698F",
          200: "#161D2F",
          900: "#10141E",
        },
        accent: {
          100: "#ff9797",
          200: "#FC4747",
        },
      },

      screens: {
        sm: "40em", // @media (min-width: 640px) { ... }
        md: "48em", // @media (min-width: 768px) { ... }
        lg: "64em", // @media (min-width: 1024px) { ... }
        xl: "80em", // @media (min-width: 1280px) { ... }
        "2xl": "96em", // @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        100: "1rem",
        200: "1.3rem",
        300: "1.5rem",
        400: "1.8rem",
        500: "2rem",
        600: "2.4rem",
        700: "2.8rem",
        800: "3rem",
        900: "3.2rem",
      },
      lineHeight: {
        6: "1.6rem",
        7: "1.9rem",
        9: "2.3rem",
        11: "3rem",
        12: "4rem",
      },
      cursor: {
        pointer:
          'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI6SURBVHgBnZRBaxNBGIYnu9uNSW1NlkgMVAl4Cyg5CAUPJlYFTyaX3CohePKUn5BcBA9CfkAvAf+B4sVLBC8eChv05ClKVaQIiUKjabOO77s7E8bUBpsXnrwzu9lvvvm+2bXFccWADRw1XlpWJpNZg+8ACV4kEomNVqtliSW0Am2mUik5HA5luVxmwEe5XC4pltBZ27a38/m8pHq9HoP54KI47ZbT6fQ52H1mRjE7jnFtK5vNrjJzhSuiui5cYA2Z3YN/HwwGYcBischgH8En8BLsKZ5w8VqtdiwoJ5bneeuO49zGeBdFD4OVSqVwu77vh1nS9VgF3SoUCq4ZiJObzAgcgK8sPtVsNqWWvka1221d011wgckI9cPJ5263K7k9NkDXbZH4Xzz3DRRVLcPDycmYBTe6KPV8kUR0Hm+AM0JFvA4+6DpRnU5nNq5UKn85A5jBUOdb8ITO7CrY4dZ0F+dX/5cbmd0Fq6zXb7CPI/F6NBq9bTQa4n/V7/dpI2QmZxfZWugKhm3eNLdI6S5q1/VkozB+BjZB3Dwe6+COZVlP4Ufs7CLV63UGeg8egksieiNmspPJZA6+DZ6DX/MZVqvVMDt1JA6w8GP4NV38ebnxePwy/IEK+FMVWHMIhmr8BnWuwj2hDqwzF+xwMpnsIeCr6XQ6DoJgIKIvhhuLxaZIjm/IEZgAH/ffwX+IqIknvvU8e+fBBlb38JALDxBwrLKTWGwf/gWMzcKfJP3pXjGuBcqlyjAwH/gDZjDKatJ5fJYAAAAASUVORK5CYII="), pointer;',
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".fw-shadow": {
          boxShadow: "0 0 0 100vmax currentColor, 0 0 2rem currentColor",
          clipPath: "inset(0 -100vmax)",
        },
        ".h-container": {
          "--mx-width": "111rem",
          "--padding": "1.6rem",
          width: "min(var(--mx-width),100% - (var(--padding) * 2))",
          marginInline: "auto",
        },
      });
    }),
  ],
};
