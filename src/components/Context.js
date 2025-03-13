"use client"
import React, { createContext, useState, useRef } from 'react';

export const DataContext = createContext();

export function ContextProvider({ children }) {
    const [skipTyping, setSkipTyping] = useState(false);

    return (
        <DataContext.Provider value={{ 
            skipTyping, 
            setSkipTyping
        }}>
            {children}
        </DataContext.Provider>
    );
}
