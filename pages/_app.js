import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider themes = {['light', 'dark']}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
  