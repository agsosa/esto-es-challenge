import tw from 'twin.macro';
import Box from '@components/common/Box';
import Button from '@components/common/Button';
import { useFormik } from 'formik';
import validationSchema from './validationSchema';
import Input from './Input';
import Select from './Select';
import { showError, showConfirmation } from '@lib/Alerts';

const FormContainer = tw.form`flex flex-col space-y-5 justify-start items-start`;

export default function Form({ project }) {
  const isEditMode = project != null && typeof project === "Object";

  const formik = useFormik({
    initialValues: {
      projectName: isEditMode ? project.name : '',
      description: isEditMode ? project.description : '',
      projectManager: isEditMode ? project.manager : null,
      assignee: isEditMode ? project.assignee : null,
      status: isEditMode ? project.status : true,
    },
    validationSchema,
    onSubmit: async (values) => {
      const isConfirmed = await showConfirmation({ title: "XD", description: JSON.stringify(values, null, 2)});
      console.log(isConfirmed, "confirmed")
    },
  });

  const statusOptions = [
    { value: true, label: 'Enabled' },
    { value: false, label: 'Disabled' },
  ];

  const managerOptions = [
    { value: 'Pepe', label: 'Pepe' },
    { value: 'Martin', label: 'Martin' },
  ];

  const assigneeOptions = [
    { value: 'Fede', label: 'Fede' },
    { value: 'Juan', label: 'Juan' },
  ];

  return (
    <Box>
      <FormContainer onSubmit={formik.handleSubmit}>
        <Input name='projectName' label='Project name' formik={formik} />
        <Input name='description' label='Description' formik={formik} />

        <Select
          name='projectManager'
          label='Project manager'
          placeholder='Select a person'
          formik={formik}
          options={managerOptions}
        />
        <Select
          name='assignee'
          label='Assigned to'
          placeholder='Select a person'
          formik={formik}
          options={assigneeOptions}
        />
        <Select name='status' label='Status' placeholder='Select a status' formik={formik} options={statusOptions} />

        <Button
          disabled={formik.dirty ? !formik.isValid : true}
          isLoading={formik.isSubmitting}
          type='submit'
          label='Create project'
        />
      </FormContainer>
    </Box>
  );
}
