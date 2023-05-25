import { createContext } from 'react';
import { IThemeContext } from '../types';
const ThemeContext = createContext<IThemeContext | null>(null);

export default ThemeContext;
