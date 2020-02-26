import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Themes } from 'ui';

const shouldUseDarkTheme = () => {
  const now = new Date();
  const alreadyNight = new Date();
  alreadyNight.setHours(18, 0, 0);

  return now >= alreadyNight;
};

const theme = shouldUseDarkTheme() ? Themes.dark : Themes.themeDefault;

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default Theme;
