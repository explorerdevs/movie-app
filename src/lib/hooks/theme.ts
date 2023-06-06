import * as React from 'react';
import { SetThemeContext, ThemeContext } from '../context';

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new ReferenceError(`useTheme must be used in a ThemeProvider`);
  }
  return context;
}

export function useSetTheme() {
  const context = React.useContext(SetThemeContext);
  if (!context) {
    throw new ReferenceError(`useSetTheme must be used in a ThemeProvider`);
  }
  return context;
}
