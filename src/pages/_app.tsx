import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>
);

export default MyApp;
