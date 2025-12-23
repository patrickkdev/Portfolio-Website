import '@/styles/app.scss';
import React from 'react';

import { ThemeProvider } from '@/hooks/use-theme';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    console.log('%c Olá, recrutador! Me chama para um café: patrick8q@gmail.com ou +55 31 99644-2788', 'color: #00ff00; font-size: 20px; font-weight: bold;');
  }, []);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
