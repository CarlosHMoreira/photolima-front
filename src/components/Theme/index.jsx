import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Themes } from 'ui';

const isDarkTheme = false;
const theme = isDarkTheme ? Themes.dark : Themes.themeDefault;

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default Theme;
