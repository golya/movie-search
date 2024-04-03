import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { GlobalStyles } from '@mui/material'
import { type AppProps } from 'next/app'
import { Provider } from 'react-redux'

import theme from '@/theme'
import { store } from '@/store'

function MyApp ({ Component }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={{ body: { height: '100vh' }, html: { height: '100vh' }, '#__next': { height: '100vh' } }} />
        <Component styles={{ height: '100vh' }} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp