import '../styles/global.css';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div id="root">
    <Component {...pageProps} />
  </div>
);

export default MyApp;
