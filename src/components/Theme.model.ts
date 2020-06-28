// import original module declarations
import 'styled-components';

interface ThemeSpacing {
  '-half': string;
  '-14': string;
  '-12': string;
  '-8': string;
  '-7': string;
  '-5': string;
  '-4': string;
  '-3': string;
  '-1': string;
  '0': string;
  '1': string;
  '3': string;
  '4': string;
  '5': string;
  '7': string;
  '8': string;
  '12': string;
  '14': string;
  '16': string;
  '20': string;
  '24': string;
  '28': string;
  '32': string;
  '36': string;
  '40': string;
  '44': string;
  '48': string;
  '52': string;
  '56': string;
  '60': string;
  '64': string;
  '68': string;
  '72': string;
  '76': string;
  '80': string;
  '84': string;
  '88': string;
  '92': string;
  '96': string;
  '100': string;
  '104': string;
  '108': string;
  '112': string;
  half: string;
  'pct-10': string;
  'pct-20': string;
  'pct-30': string;
  'pct-40': string;
  'pct-50': string;
  'pct-60': string;
  'pct-70': string;
  'pct-80': string;
  'pct-90': string;
  'pct-100': string;
  screen: string;
}

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: ThemeSpacing;
    borderWidth: {
      default: '1px';
      '0': '0';
      '2': '2px';
      '3': '3px';
      '4': '4px';
      '6': '6px';
      '8': '8px';
    };
    boxShadow: {
      default: 'rgba(0, 0, 0, 0.15)';
      secondary: 'rgba(0, 0, 0, 0.03) 0px 6px 12px, rgba(0, 0, 0, 0.18) 0px 1px 4px';
      xs: '0px 1px 2px rgba(0, 0, 0, 0.18)';
      sm: '0px 2px 8px rgba(0, 0, 0, 0.15)';
      smd: '0px 2px 8px rgba(0, 0, 0, 0.12)';
      md: '0px 2px 16px rgba(0, 0, 0, 0.12)';
      lg: '0px 8px 28px rgba(0, 0, 0, 0.28)';
    };
    colors: {
      'brand-primary': '#ff3366';
      'brand-primary-dark': '#d40b3d';
      'brand-secondary': '#6bcbc3';
      'brand-secondary-dark': '#008489';
      'black-dark': '#222222'; // * used for: titles or main menu items
      'gray-default': '#fafafa';
      'gray-normal': '#f7f7f7'; // * used for: hover menu
      'gray-lightest': '#f1f1f1'; // * used for backgrounds
      'gray-lighter': '#dddddd'; // * used for: list anchor lines, borders
      'gray-light': '#e4e4e4'; // A slightly darker gray for borders, lines, strokes or dividers.
      'gray-medium': '#767676'; // A medium gray for subheadings and supporting body copy.
      'gray-dark': '#717171'; // * used for subtitles
      'gray-darker': '#484848'; // A darker gray for subheadings and supporting body copy.
      white: '#ffffff';
      black: '#000000';
    };
    fontFamily: {
      montserrat: 'Montserrat';
    };
    fontSizes: {
      xs: '0.75rem';
      sm: '0.875rem';
      base: '1rem';
      md: '1.125rem';
      lg: '1.25rem';
      xl: '1.5rem';
      '2xl': '1.875rem';
      '3xl': '2em';
      '4xl': '2.25rem';
      '5xl': '3rem';
      '6xl': '4rem';
    };
    fontWeight: {
      hairline: string;
      thin: string;
      light: string;
      normal: string;
      medium: string;
      semibold: string;
      bold: string;
      extrabold: string;
      black: string;
    };
    icons: {
      [key: string]: string;
    };
    inset: ThemeSpacing;
    lineHeight: {
      none: string;
      tight: string;
      snug: string;
      normal: string;
      relaxed: string;
      loose: string;
      '3': string;
      '4': string;
      '4/5': string;
      '5': string;
      '6': string;
      '7': string;
      '8': string;
      '9': string;
      '10': string;
    };
    maxHeight: ThemeSpacing;
    maxWidth: ThemeSpacing;
    minHeight: ThemeSpacing;
    minWidth: ThemeSpacing;
    spacing: ThemeSpacing;
    screens: {
      xxxs: '400px';
      xxs: '460px';
      xs: '480px';
      sm: '640px';
      smd: '744px';
      md: '768px';
      mlg: '950px';
      lg: '1024px';
      xlg: '1128px';
      xl: '1280px';
      xxl: '1440px';
      xxxl: '1600px';
      huge: '1760px';
    };
    transitionTimingFunction: {
      'ease-in-nav': 'cubic-bezier(0.35, 0, 0.65, 1) ';
    };
    zIndex: {
      top: '9999999999';
    };
  }
}
