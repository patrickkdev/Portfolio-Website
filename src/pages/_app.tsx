import '@/styles/app.scss';
import React from 'react';

import { ThemeProvider } from '@/hooks/use-theme';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    console.log('%c Olá, recrutador! Gostou do código? Me chama para um café: patrick8q@gmail.com', 'color: #00ff00; font-size: 20px; font-weight: bold;');
  }, []);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
