import '../styles/globals.css'
import { GlobalProvider } from '../context/AppContext';
import type { AppProps } from 'next/app'

function Application({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default Application
