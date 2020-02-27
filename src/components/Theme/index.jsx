import React from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

import { getThemeByNameOrDefault } from 'ui/Themes';

const Theme = ({ children, theme }) => (
  <ThemeProvider theme={getThemeByNameOrDefault(theme)}>
    {children}
  </ThemeProvider>
);

const mapStateToProps = ({ ui: { theme } }) => ({ theme });

export default connect(mapStateToProps)(Theme);
