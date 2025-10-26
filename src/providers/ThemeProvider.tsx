'use client'
import React, { createContext, useState, useEffect } from 'react'

export interface ThemeContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<string>(() => {
    const getTheme = localStorage.getItem('theme') || 'light'
    return getTheme
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
