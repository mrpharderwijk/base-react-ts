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
      default: string;
      '0': string;
      '2': string;
      '3': string;
      '4': string;
      '6': string;
      '8': string;
    };
    boxShadow: {
      default: string;
      secondary: string;
      xs: string;
      sm: string;
      smd: string;
      md: string;
      lg: string;
    };
    colors: {
      'brand-primary': string;
      'brand-primary-dark': string;
      'brand-secondary': string;
      'brand-secondary-dark': string;
      'black-dark': string;
      'gray-default': string;
      'gray-normal': string;
      'gray-lightest': string;
      'gray-lighter': string;
      'gray-light': string;
      'gray-medium': string;
      'gray-dark': string;
      'gray-darker': string;
    };
    fontFamily: {
      montserrat: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
    inset: ThemeSpacing;
    lineHeight: {
      '4/5': string;
    };
    maxHeight: ThemeSpacing;
    maxWidth: ThemeSpacing;
    minHeight: ThemeSpacing;
    minWidth: ThemeSpacing;
    spacing: ThemeSpacing;
    screens: {
      xxxs: string;
      xxs: string;
      xs: string;
      sm: string;
      smd: string;
      md: string;
      mlg: string;
      lg: string;
      xlg: string;
      xl: string;
      xxl: string;
      xxxl: string;
      huge: string;
    };
    transitionTimingFunction: {
      'ease-in-nav': string;
    };
    zIndex: {
      top: string;
    };
  }
}
