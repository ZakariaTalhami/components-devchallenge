import React from 'react';
import theme from './theme';

export const ThemeContext = React.createContext(theme);

export const ThemeProvider = ({ customTheme, ...rest }) => (
  <ThemeContext.Provider value={customTheme || theme} {...rest} />
);

export const ThemeConsumer = ThemeContext.Consumer;
