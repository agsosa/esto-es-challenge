import Head from 'next/head';
import tw from 'twin.macro';
import Button from '@components/common/Button';
import Footer from '@components/layout/Footer';

import { AiOutlinePlus }  from 'react-icons/ai';

const Container = tw.div`flex flex-col h-screen`;
const Header = tw.header`bg-white p-4 border-b`;
const Nav = tw.nav`bg-white p-4 shadow-xl border-b flex justify-between items-center`;

const NavTitle = tw.h1`font-semibold text-xl`;
const Main = tw.main`bg-silver-500 w-full h-full`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>My Projects - Esto Es</title>
        <meta name='description' content='Frontend Challenge para Esto Es' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header>Esto Es</Header>
      <Nav>
        <NavTitle>My projects</NavTitle>
        <Button icon={<AiOutlinePlus />} label="Add project"/>
      </Nav>

      <Main>xd</Main>

      <Footer />
    </Container>
  );
}
