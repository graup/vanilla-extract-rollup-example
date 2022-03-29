import { themeClass } from '@vanilla-extract-rollup-example/ui';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <div className={themeClass}><Component {...pageProps} /></div>;
}

export default MyApp;
