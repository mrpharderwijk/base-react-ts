const { colors } = require('tailwindcss/defaultTheme');
const spacing = {
  '-half': '-50%',
  '-14': '-0.875rem',
  '-12': '-0.75rem',
  '-8': '-0.5rem',
  '-7': '-0.4375rem',
  '-5': '-0.3125rem',
  '-4': '-0.25rem',
  '-3': '-0.1875rem',
  '-1': '0.0625rem',
  '0': '0rem',
  '1': '0.0625rem',
  '3': '0.1875rem',
  '4': '0.25rem',
  '5': '0.3125rem',
  '7': '0.4375rem',
  '8': '0.5rem',
  '12': '0.75rem',
  '14': '0.875rem',
  '16': '1rem',
  '20': '1.25rem',
  '24': '1.5rem',
  '28': '1.75rem',
  '32': '2rem',
  '36': '2.25rem',
  '40': '2.5rem',
  '44': '2.75rem',
  '48': '3rem',
  '52': '3.25rem',
  '56': '3.5rem',
  '60': '3.75rem',
  '64': '4rem',
  '68': '4.25rem',
  '72': '4.5rem',
  '76': '4.75rem',
  '80': '5rem',
  '84': '5.25rem',
  '88': '5.5rem',
  '92': '5.75rem',
  '96': '6rem',
  '100': '6.25rem',
  '104': '6.5rem',
  '108': '6.75rem',
  '112': '7rem',
  half: '50%',
  'pct-10': '10%',
  'pct-20': '20%',
  'pct-30': '30%',
  'pct-40': '40%',
  'pct-50': '50%',
  'pct-60': '60%',
  'pct-70': '70%',
  'pct-80': '80%',
  'pct-90': '90%',
  'pct-100': '100%',
};

module.exports = {
  purge: [],
  theme: {
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    fontFamily: {
      montserrat: 'Montserrat',
    },
    screens: {
      xxxs: '400px',
      // => @media (min-width: 400px) { ... }

      xxs: '460px',
      // => @media (min-width: 460px) { ... }

      xs: '480px',
      // => @media (min-width: 480px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      smd: '744px',
      // => @media (min-width: 744px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      mlg: '950px',
      // => @media (min-width: 950px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xlg: '1128px',
      // => @media (min-width: 1128px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      xxl: '1440px',
      // => @media (min-width: 1440px) { ... }

      xxxl: '1600px',
      // => @media (min-width: 1600px) { ... }

      huge: '1760px',
      // => @media (min-width: 1760px) { ... }
    },
    extend: {
      backgroundColor: {
        overlay: 'rgba(0, 0, 0, 0.2)',
      },
      borderRadius: {
        ...spacing,
      },
      boxShadow: {
        default: 'rgba(0, 0, 0, 0.15)',
        secondary: 'rgba(0, 0, 0, 0.03) 0px 6px 12px, rgba(0, 0, 0, 0.18) 0px 1px 4px',
        xs: '0px 1px 2px rgba(0, 0, 0, 0.18)',
        sm: '0px 2px 8px rgba(0, 0, 0, 0.15)',
        smd: '0px 2px 8px rgba(0, 0, 0, 0.12)',
        md: '0px 2px 16px rgba(0, 0, 0, 0.12)',
        lg: '0px 8px 28px rgba(0, 0, 0, 0.28)',
      },
      colors: {
        ...colors,
        'brand-primary': '#ff3366',
        'brand-primary-dark': '#d40b3d',
        'brand-secondary': '#6bcbc3',
        'brand-secondary-dark': '#008489',
        'black-dark': '#222222', // * used for: titles or main menu items
        'gray-default': '#fafafa',
        'gray-normal': '#f7f7f7', // * used for: hover menu
        'gray-lightest': '#f1f1f1', // * used for backgrounds
        'gray-lighter': '#dddddd', // * used for: list anchor lines, borders
        'gray-light': '#e4e4e4', // A slightly darker gray for borders, lines, strokes or dividers.
        'gray-medium': '#767676', // A medium gray for subheadings and supporting body copy.
        'gray-dark': '#717171', // * used for subtitles
        'gray-darker': '#484848', // A darker gray for subheadings and supporting body copy.
      },
      inset: {
        ...spacing,
      },
      lineHeight: {
        '4/5': '1.125rem',
      },
      maxWidth: {
        ...spacing,
        screen: '100vw',
      },
      minWidth: {
        ...spacing,
      },
      maxHeight: {
        ...spacing,
      },
      minHeight: {
        ...spacing,
      },
      spacing: {
        ...spacing,
        '272': '17rem',
        'mobile-inner': '17.5rem',
        'mobile-outer': '20rem',
      },
      transitionTimingFunction: {
        'ease-in-nav': 'cubic-bezier(0.35, 0, 0.65, 1) ',
      },
      zIndex: {
        top: '9999999999',
      },
    },
  },
  variants: {
    boxShadow: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
};
