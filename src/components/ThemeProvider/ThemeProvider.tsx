import { FC, PropsWithChildren, useState } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import { TThemeProviderMode } from '../../types';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<TThemeProviderMode>('light');
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
