import Main from '@components/layout/Main';
import Nav from '@components/layout/Nav';
import ProjectsTable from '@components/projects/display/Table';
import ProjectsCards from '@components/projects/display/Cards';
import { AiOutlinePlus } from 'react-icons/ai';
import Button from '@components/common/Button';
import { useRouter } from 'next/router';
import API from '@lib/API';
import { useMediaQuery } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';
import VStack from '@components/common/VStack';

export default function Home() {
  const router = useRouter();
  const { data, error, isValidating } = API.getProjects();
  const [isLG] = useMediaQuery('(min-width: 1024px)');
  const handleAddProject = () => router.push('/projects/add');

  return (
    <>
      <Nav
        title={`My projects`}
        rightComponent={<Button onClick={handleAddProject} icon={<AiOutlinePlus size='20px' />} label='Add project' />}
      />

      <Main>
        {isValidating && <Spinner size='xl' />}
        {/* Desktop */ !isValidating && isLG && <ProjectsTable projects={data?.result?.list} />}
        {/* Mobile */ !isValidating && !isLG && <ProjectsCards projects={data?.result?.list} />}
      </Main>
    </>
  );
}
