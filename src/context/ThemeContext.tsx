import React from 'react';
import defaultTheme from '../theme/defaults';

interface ThemeContextInterface {
    component: any;
}

export const ThemeContext = React.createContext<ThemeContextInterface>({component: defaultTheme});

interface ThemeProviderProps {
    children: React.ReactNode;
    value?: any;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children, value}) => {
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
