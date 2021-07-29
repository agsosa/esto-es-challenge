import '@styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import tw from 'twin.macro';

const Container = tw.div`flex flex-col h-full justify-center items-center min-h-screen w-full bg-silver-500`;

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>Project Management - Esto Es</title>
        <meta name='description' content='Frontend Challenge' />
        <meta name='viewport' content='width=device-width, initial-scale=1, viewport-fit=cover' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <Header />

        <Component {...pageProps} />

        <Footer />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
