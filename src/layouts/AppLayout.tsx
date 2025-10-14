import React from 'react';
import Head from 'next/head';
import Menu from '@/components/partials/Menu';
import Footer from '@/components/partials/Footer';
import ScrollToTop from 'react-scroll-to-top';
import { FiArrowUp } from 'react-icons/fi';

interface Props {
  title?: string;
  children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children, title }) => {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'Patrick Ferreira';
  const pageTitle = title ? `${title} - Patrick Ferreira` : appName;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/images/avatar/me.png" />
        <link rel="canonical" href="https://patrick.makztech.com" />

        {/* Meta tags */}
        <meta name="description" content="Patrick Ferreira - Portfólio" />
        <meta name="keywords" content="Patrick Ferreira, Developer, Desenvolvedor, Web, Automação, Automation, Full-stack, Front-end, Back-end, Golang, Node.js, TypeScript, React, Software, Engineer" />
        <meta name="author" content="Patrick Ferreira" />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content="Patrick Ferreira - Portfólio" />
        <meta property="og:image" content="/images/open_graph.png" />
        <meta property="og:url" content="https://patrick.makztech.com" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="flex min-h-screen flex-col">
        <ScrollToTop
          smooth
          className="fixed bottom-16 right-8 z-10 cursor-pointer rounded-lg bg-primary-500 p-3 text-white transition-colors duration-150 hover:bg-primary-600 "
          component={
            <div className="flex justify-center">
              <FiArrowUp />
            </div>
          }
        />
        <Menu />
        <div className="mt-16">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
