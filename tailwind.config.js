import Color from 'color';

const alpha = (clr, val) => Color(clr).alpha(val).rgb().string();

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
      spacing: {
        128: '32rem',
        144: '36rem',
        160: '40rem',
        176: '44rem',
        192: '48rem',
        208: '52rem'
      },
      borderRadius: {
        default: '0',
        'form-elements': '.7rem'
      },
      backgroundImage: {
        shady: `linear-gradient(${accent}20,rgba(0,0,0,0.02)),url(/images/grid.svg)`
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
