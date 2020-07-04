import { DefaultTheme } from 'styled-components';
import { themeSpacing } from './themeSpacing';
import { themeIcons } from './themeIcons';
import { themeScreens } from './themeScreens';
import { themeColors } from './themeColors';

/* eslint-disable import/prefer-default-export */
export const defaultTheme: DefaultTheme = {
  borderWidth: {
    default: '1px',
    '0': '0',
    '2': '2px',
    '3': '3px',
    '4': '4px',
    '6': '6px',
    '8': '8px',
  },
  borderRadius: themeSpacing,
  boxShadow: {
    default: 'rgba(0, 0, 0, 0.15)',
    secondary: 'rgba(0, 0, 0, 0.03) 0px 6px 12px, rgba(0, 0, 0, 0.18) 0px 1px 4px',
    xs: '0px 1px 2px rgba(0, 0, 0, 0.18)',
    sm: '0px 2px 8px rgba(0, 0, 0, 0.15)',
    smd: '0px 2px 8px rgba(0, 0, 0, 0.12)',
    md: '0px 2px 16px rgba(0, 0, 0, 0.12)',
    lg: '0px 8px 28px rgba(0, 0, 0, 0.28)',
  },
  colors: themeColors,
  fontFamily: {
    montserrat: 'Montserrat',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    md: '1.125rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '1.875rem',
    '3xl': '2em',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
  fontWeight: {
    hairline: '100',
    thin: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  icons: themeIcons,
  inset: themeSpacing,
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
    '3': '.75rem',
    '4': '1rem',
    '4/5': '1.125rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    '9': '2.25rem',
    '10': '2.5rem',
  },
  maxHeight: themeSpacing,
  maxWidth: { ...themeSpacing, ...{ screen: themeScreens } },
  minHeight: themeSpacing,
  minWidth: themeSpacing,
  screens: themeScreens,
  spacing: themeSpacing,
  transitionTimingFunction: {
    'ease-in-nav': 'cubic-bezier(0.35, 0, 0.65, 1) ',
  },
  zIndex: {
    top: '9999999999',
  },
};
/* eslint-enable import/prefer-default-export */
