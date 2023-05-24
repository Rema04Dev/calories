import { createContext } from 'react';
import { IThemeContext } from '../types';
const ThemeContext = createContext<IThemeContext>({ theme: 'light' });

export default ThemeContext;
