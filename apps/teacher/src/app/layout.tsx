import React from 'react'
import ThemeProvider from '@/components/ThemeProvider'
import ReduxProvider from '@/components/ReduxProvider'

import '@/styles/globals.css'
import 'ui/styles.css'

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <body>
      <ReduxProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </ReduxProvider>
    </body>
  </html>
)

export default RootLayout
