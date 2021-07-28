import tw from 'twin.macro';
import Box from '@components/common/Box';
import Button from '@components/common/Button';
import { useFormik } from 'formik';
import validationSchema from './validationSchema';
import Input from './Input';
import Select from './Select';

const FormContainer = tw.form`flex flex-col space-y-5 justify-start items-start`;

export default function Form() {
  const formik = useFormik({
    initialValues: {
      projectName: '',
      description: '',
      projectManager: null,
      assignee: null,
      status: true,
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const statusOptions = [
    { value: true, label: 'Enabled' },
    { value: false, label: 'Disabled' },
  ];

  return (
    <Box>
      <FormContainer onSubmit={formik.handleSubmit}>
        <Input name='projectName' label='Project name' formik={formik} />
        <Input name='description' label='Description' formik={formik} />

        <Select name='projectManager' label='Project manager' placeholder='Select a person' formik={formik} />
        <Select name='assignee' label='Assigned to' placeholder='Select a person' formik={formik} />
        <Select name='status' label='Status' placeholder='Select a status' formik={formik} options={statusOptions} />

        <Button isLoading={formik.isSubmitting} type='submit' label='Create project' />
      </FormContainer>
    </Box>
  );
}
