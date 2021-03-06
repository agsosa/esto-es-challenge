/* 
  EDIT PROJECT PAGE (form)
*/

import Main from '@components/layout/Main';
import Nav from '@components/layout/Nav';
import { useRouter } from 'next/router';
import Form from '@components/projects/Form';
import { Spinner } from '@chakra-ui/react';
import API from '@lib/API';

export default function ProjectForm() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isValidating } = API.getProjectById(id);

  return (
    <>
      <Nav useBack title='Edit project' />

      <Main>
        {/* Loading */ isValidating && <Spinner size='big' />}
        {/* Project loaded */ data && !data.error && <Form project={data.result} />}
        {/* Error, project not loaded */ data && data.error && <span>Project #{id} couldn't be loaded</span>}
      </Main>
    </>
  );
}
