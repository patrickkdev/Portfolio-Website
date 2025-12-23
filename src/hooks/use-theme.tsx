import React, { useEffect } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>(Theme.LIGHT);
  const [manualOverride, setManualOverride] = React.useState<boolean>(false);

  const applyTheme = React.useCallback((newTheme: Theme) => {
    document.documentElement.classList.toggle(Theme.DARK, newTheme === Theme.DARK);
    setTheme(newTheme);
  }, []);

  const setUserTheme = (newTheme: Theme) => {
    localStorage.setItem('theme', newTheme);
    setManualOverride(true);
    applyTheme(newTheme);
  };

  const toggleTheme = () => {
    setUserTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme') as Theme | null;

    if (savedTheme) {
      applyTheme(savedTheme);
      setManualOverride(true);
    } else {
      applyTheme(mediaQuery.matches ? Theme.DARK : Theme.LIGHT);
    }

    const handleSystemChange = (event: MediaQueryListEvent) => {
      if (!manualOverride) {
        applyTheme(event.matches ? Theme.DARK : Theme.LIGHT);
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemChange);
    };
  }, [applyTheme, manualOverride]);


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };
