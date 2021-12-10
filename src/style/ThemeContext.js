import React from 'react';
import theme from "./theme";

export const ThemeContext = React.createContext(theme);

export const ThemeProvider = ThemeContext.Provider;

export const ThemeConsumer = ThemeContext.Consumer;