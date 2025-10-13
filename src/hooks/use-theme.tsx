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

  const applyTheme = (newTheme: Theme) => {
    document.documentElement.classList.toggle(Theme.DARK, newTheme === Theme.DARK);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  const toggleTheme = () => {
    applyTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Check for saved theme first
    const savedTheme = localStorage.getItem('theme') as Theme | null;

    if (savedTheme) {
      applyTheme(savedTheme);
    } else {
      // Otherwise, use system preference
      applyTheme(mediaQuery.matches ? Theme.DARK : Theme.LIGHT);
    }

    // Always listen for system preference changes
    const handleChange = (event: MediaQueryListEvent) => {
      // Only react to changes if the user hasn't saved a preference
      const userHasSavedTheme = localStorage.getItem('theme') !== null;
      if (!userHasSavedTheme) {
        applyTheme(event.matches ? Theme.DARK : Theme.LIGHT);
      }
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

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
