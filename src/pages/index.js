import Head from 'next/head';
import tw from 'twin.macro';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import Nav from '@components/layout/Nav';
import ProjectsTable from '@components/projects/display/Table';
import ProjectsList from '@components/projects/display/List';

const Container = tw.div`flex flex-col h-screen`;
const Main = tw.main`bg-silver-500 w-full h-full py-8 px-12`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>My Projects - Esto Es</title>
        <meta name='description' content='Frontend Challenge para Esto Es' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Nav />

      <Main>
        <ProjectsTable />
        <ProjectsList />
      </Main>

      <Footer />
    </Container>
  );
}
