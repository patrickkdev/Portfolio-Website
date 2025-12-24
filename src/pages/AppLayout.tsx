/* eslint-disable @next/next/no-before-interactive-script-outside-document */
/* eslint-disable @next/next/no-page-custom-font */

import Footer from '@/components/partials/Footer';
import Menu from '@/components/partials/Menu';
import Head from 'next/head';
import Script from 'next/script';
import React from 'react';
import { FiArrowUp } from 'react-icons/fi';
import ScrollToTop from 'react-scroll-to-top';

import { ThemeProvider } from '@/hooks/use-theme';
import { DM_Sans } from 'next/font/google';

const font = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

interface Props {
  title?: string;
  children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children, title }) => {
  React.useEffect(() => {
    console.log(
      '%c Olá, recrutador! Me chama para um café: patrick8q@gmail.com ou +55 31 99644-2788', 
      'color: #00ff00; font-size: 20px; font-weight: bold;'
    );
  }, []);

  const pageTitle = React.useMemo(() => {
    return title ? title : 'Patrick Ferreira - Desenvolvedor de Software';
  }, [title]);

  return (
    <div lang="pt-BR" className={font.className}>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/images/avatar/me.png" />
        <link rel="canonical" href="https://patrick.makztech.com" />

        {/* Meta tags */}
        <meta name="description" content="Patrick Ferreira - Desenvolvedor de Software" />
        <meta name="keywords" content="Patrick Ferreira, Developer, Desenvolvedor, Web, Automação, Automation, Full-stack, Front-end, Back-end, Golang, Go, Node.js, TypeScript, React, Software, Engineer, Full-stack Developer" />
        <meta name="author" content="Patrick Ferreira" />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content="Patrick Ferreira - Desenvolvedor de Software" />
        <meta property="og:image" content="/images/open_graph.png" />
        <meta property="og:url" content="https://patrick.makztech.com" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;500;600;700&display=swap"
          rel="stylesheet"
        />
        
        <meta property="og:type" content="website" />
      </Head>

      {/* Apply theme before browser paints so it doesn't flash */}
      <Script
        id="theme-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              try {
                const stored = localStorage.getItem('theme');
                const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const theme = stored || (systemDark ? 'dark' : 'light');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            })();
          `,
        }}
      />
      {/* Umami Analytics */}
      <Script defer src="https://cloud.umami.is/script.js" data-website-id="cd0ee4eb-5f13-4efd-9d72-316594d329cd"></Script>
      {/* GitHub Buttons */}
      <Script async defer src="https://buttons.github.io/buttons.js"></Script>

      {/* App */}
      <ThemeProvider>
        <div className="flex min-h-screen flex-col">
          <ScrollToTop
            smooth
            className="fixed bottom-16 right-8 z-10 cursor-pointer rounded-lg bg-primary-600 dark:bg-primary-400 p-3 text-white transition-colors duration-150 hover:scale-110 transition-transform"
            component={
              <div className="flex justify-center">
                <FiArrowUp />
              </div>
            }
          />
          <Menu />
          <div>{children}</div>
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default AppLayout;
