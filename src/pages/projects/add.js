/*
  CREATE PROJECT PAGE (form)
*/

import Main from '@components/layout/Main';
import Nav from '@components/layout/Nav';
import Form from '@components/projects/Form';

export default function ProjectForm() {
  return (
    <>
      <Nav useBack title='Add project' />

      <Main>
        <Form />
      </Main>
    </>
  );
}
