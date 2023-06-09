import React from 'react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'next-themes'
import store from '@/redux/store'
import '@/styles/globals.css'
import 'ui/styles.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  </Provider>
)

export default MyApp
