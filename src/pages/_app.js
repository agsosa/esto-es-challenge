import '@styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import PageContainer from '@components/layout/PageContainer';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>Project Management - Esto Es</title>
        <meta name='description' content='Frontend Challenge' />
        <meta name='viewport' content='width=device-width, initial-scale=1, viewport-fit=cover' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PageContainer>
        <Header />

        <Component {...pageProps} />

        <Footer />
      </PageContainer>
    </ChakraProvider>
  );
}

export default MyApp;
