'use client'

import React from 'react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

interface ThemeProviderProps {
  children: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => (
  <NextThemeProvider
    attribute="class"
    defaultTheme="light"
    themes={['light', 'dark']}
  >
    {children}
  </NextThemeProvider>
)

export default ThemeProvider
