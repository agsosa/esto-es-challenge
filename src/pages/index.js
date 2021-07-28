import Main from '@components/layout/Main';
import Nav from '@components/layout/Nav';
import ProjectsTable from '@components/projects/display/Table';
import ProjectsList from '@components/projects/display/List';
import { AiOutlinePlus } from 'react-icons/ai';
import Button from '@components/common/Button';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleAddProject = () => router.push('/project/add');

  return (
    <>
      <Nav
        title='My projects'
        rightComponent={<Button onClick={handleAddProject} icon={<AiOutlinePlus size='20px' />} label='Add project' />}
      />

      <Main>
        <ProjectsTable />
        <ProjectsList />
      </Main>
    </>
  );
}
