import '@styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import tw from 'twin.macro';

const Container = tw.div`flex flex-col h-screen`;

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>My Projects - Esto Es</title>
        <meta name='description' content='Frontend Challenge para Esto Es' />
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
