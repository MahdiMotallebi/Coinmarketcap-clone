'use client';

import React, { createContext, useContext } from 'react';

//components
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../styles/global/globals';
import { customTheme } from '../../styles/themeConfig';

interface ProviderTypes {
  children?: JSX.Element | Array<JSX.Element>;
}

//create context
const GlobalContext = createContext({
  mode: 'light',
  toggleThemeHandler: () => {}
});

//custom hook useContext
export const useGlobalContext = () => useContext(GlobalContext);

//contextProvider & themeProvider
const ContextProvider = ({ children }: ProviderTypes) => {
  const [mode, setMode] = React.useState<string>('light');

  const toggleThemeHandler = React.useCallback(() => {
    mode === 'light' ? setMode('dark') : setMode('light');
  }, [mode]);

  const theme: DefaultTheme = useMode();

  return (
    <GlobalContext.Provider
      value={{
        mode,
        toggleThemeHandler
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};

export default ContextProvider;

export const useMode = (): DefaultTheme => {
  const { mode } = useGlobalContext();
  const theme = React.useMemo(() => customTheme(mode), [mode]);
  return theme;
};
