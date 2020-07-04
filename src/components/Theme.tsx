import React from 'react';
import { ThemeProvider } from 'styled-components';
import { FIXME } from '../models/FixMe.model';
import { defaultTheme } from './themeDefault';

const Theme: React.FC = ({ children }: FIXME) => <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;

export default Theme;
