import '../styles/global.css';

import type { AppProps } from 'next/app';

import { AuthProvider } from '../context/authContext';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div id="root">
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  </div>
);

export default MyApp;
