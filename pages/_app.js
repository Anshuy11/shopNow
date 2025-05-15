import "@/styles/globals.css";
import ThemeContextFunc from './theme_context'
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return(
  <ThemeContextFunc>
    <Layout>
    <Component {...pageProps} />

    </Layout>
  
  </ThemeContextFunc>)
}
