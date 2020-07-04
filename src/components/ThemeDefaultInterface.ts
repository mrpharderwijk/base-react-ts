// import original module declarations
import 'styled-components';
import { ThemeSpacingInterface } from './ThemeSpacingInterface';
import { ThemeScreensInterface } from './ThemeScreensInterface';
import { ThemeColorsInterface } from './ThemeColorsInterface';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: ThemeSpacingInterface;
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
    colors: ThemeColorsInterface;
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
    inset: ThemeSpacingInterface;
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
    maxHeight: ThemeSpacingInterface;
    maxWidth: ThemeSpacingInterface & { screen: ThemeScreensInterface };
    minHeight: ThemeSpacingInterface;
    minWidth: ThemeSpacingInterface;
    spacing: ThemeSpacingInterface;
    screens: ThemeScreensInterface;
    transitionTimingFunction: {
      'ease-in-nav': 'cubic-bezier(0.35, 0, 0.65, 1) ';
    };
    zIndex: {
      top: '9999999999';
    };
  }
}
