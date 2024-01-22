import { AppProps } from 'next/app';
import { MyThemeProvider } from '../styles/MyThemeProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyThemeProvider>
      <Component {...pageProps} />
    </MyThemeProvider>
  );
}

export default MyApp;
