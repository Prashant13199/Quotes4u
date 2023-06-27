import React, { useEffect, createContext } from 'react';

export const ColorModeContext = createContext();

export default function ThemeContext(props) {

    const [mode, setMode] = React.useState('light');
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

    useEffect(() => {
        if (darkThemeMq.matches) {
            setMode('dark')
        } else {
            setMode('light')
        }
    }, [])

    return (
        <ColorModeContext.Provider value={{ mode }}>
            {props.children}
        </ColorModeContext.Provider>
    );
}