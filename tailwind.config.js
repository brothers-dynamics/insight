import Color from 'color';
const alpha = (clr, val) => Color(clr).alpha(val).rgb().string();
const lighten = (clr, val) => Color(clr).lighten(val).rgb().string();
const darken = (clr, val) => Color(clr).darken(val).rgb().string();

const accent = '#1A237E';

const shades = {};

for (let i = 0; i <= 100; i += 5) {
  shades[i] = alpha(accent, i / 100);
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        accent: {
          ...shades
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '.line-clamp': {
              display: '-webkit-box',
              '-webkit-box-orient': 'vertical',
              overflow: 'hidden'
            }
          }
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animated'),
    function ({ addUtilities }) {
      const newUtilities = {};
      Array.from(Array(10)).forEach((_, index) => {
        const count = index + 1;
        newUtilities[`.line-clamp-${count}`] = {
          '-webkit-line-clamp': `${count.toString()}`
        };
      });
      addUtilities(newUtilities);
    }
  ]
};
