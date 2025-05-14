import "@/styles/globals.css";
import ThemeContextFunc from './theme_context'

export default function App({ Component, pageProps }) {
  return(
  <ThemeContextFunc>
  <Component {...pageProps} />
  </ThemeContextFunc>)
}
