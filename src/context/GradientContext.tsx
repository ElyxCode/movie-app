import React, { createContext, useState } from 'react';

interface DualColors {
    primary: string;
    secundary: string;
}

interface ContextProps {
    colors: DualColors,
    prevColors: DualColors,
    setMainColors: (colors: DualColors) => void;
    setPrevMainColors: (colors: DualColors) => void;
}

export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({ children }: any) => {

    const [colors, setColors] = useState({
        primary: 'transparent',
        secundary: 'transparent'
    });

    const [prevColors, setPrevColors] = useState({
        primary: 'transparent',
        secundary: 'transparent'
    });

    const setMainColors = ( colors: DualColors ) => {
        setColors(colors);
    };

    const setPrevMainColors = ( colors: DualColors ) => {
        setPrevColors(colors);
    }

    return (
        <GradientContext.Provider value={{
            colors,
            prevColors,
            setMainColors,
            setPrevMainColors
        }}>
            { children }
        </GradientContext.Provider>
    )
}