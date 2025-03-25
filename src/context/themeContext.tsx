// ThemeContext.tsx
import React, { createContext, useEffect, useState } from 'react';
import { lightTheme, darkTheme } from '../theme';
import { ThemeProvider } from 'styled-components';

export const KEY_TEMA = '@projetoBase6:tema'

interface ThemeContextType {
  theme: typeof lightTheme;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextType);

export const ThemeProviderCustom: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState<typeof lightTheme>(lightTheme);

  function loadTheme() {
    const storage = localStorage.getItem(KEY_TEMA)
    const tema: string = storage ? JSON.parse(storage) : 'light'

    if (tema === 'dark') {
      setIsDarkMode(true);
      setTheme(darkTheme);
    }
  }

  const toggleTheme = async () => {
    const newTheme = isDarkMode ? lightTheme : darkTheme;
    setIsDarkMode(!isDarkMode);
    setTheme(newTheme);
    localStorage.setItem(KEY_TEMA, isDarkMode ? 'light' : 'dark');
  };

  useEffect(() => {
    loadTheme()
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
