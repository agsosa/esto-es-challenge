import tw from 'twin.macro';
import Box from '@components/common/Box';
import Button from '@components/common/Button';
import { useFormik } from 'formik';
import validationSchema from './validationSchema';
import Input from './Input';
import Select from './Select';
import { showError, showSuccess, showConfirmation } from '@lib/Alerts';
import API from '@lib/API';
import { Spinner } from '@chakra-ui/react';

const FormContainer = tw.form`flex flex-col space-y-5 justify-start items-start`;

export default function Form({ project }) {
  const { data: personsData, error, isValidating } = API.getPersons();
  const persons = personsData?.result?.list;

  const isEditMode = project != null && typeof project === 'object';

  const formik = useFormik({
    initialValues: {
      projectName: isEditMode ? project.projectName : '',
      description: isEditMode ? project.description : '',
      managerId: isEditMode ? project.manager.id : '',
      assigneeId: isEditMode ? project.assignee.id : '',
      status: isEditMode ? project.status : true,
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const func = isEditMode ? API.updateProject : API.createProject;
      const result = await func({ ...values, id: project.id });

      if (result) {
        showSuccess({
          title: isEditMode ? 'Project updated ' : 'Project created',
          description: `The project has been ${isEditMode ? 'updated' : 'created'} successfully`,
        });
        if (!isEditMode) resetForm();
      } else {
        showError({ title: 'Error', description: 'An error has occurred, please try again' });
      }
    },
  });

  const statusOptions = [
    { value: true, label: 'Enabled' },
    { value: false, label: 'Disabled' },
  ];

  const managerOptions = persons?.map((p) => ({ value: p.id, label: `${p.firstName} ${p.lastName}` }));
  const assigneeOptions = persons?.map((p) => ({ value: p.id, label: `${p.firstName} ${p.lastName}` }));

  return (
    <Box>
      <FormContainer onSubmit={formik.handleSubmit}>
        <Input name='projectName' label='Project name' formik={formik} />
        <Input name='description' label='Description' formik={formik} />

        <Select
          name='managerId'
          label='Project manager'
          placeholder='Select a person'
          formik={formik}
          options={managerOptions}
        />
        <Select
          name='assigneeId'
          label='Assigned to'
          placeholder='Select a person'
          formik={formik}
          options={assigneeOptions}
        />
        <Select name='status' label='Status' placeholder='Select a status' formik={formik} options={statusOptions} />

        <Button
          disabled={formik.isSubmitting || isValidating || (formik.dirty ? !formik.isValid : true)}
          isLoading={formik.isSubmitting}
          type='submit'
          label={isEditMode ? 'Update Project' : 'Create project'}
        />
      </FormContainer>
    </Box>
  );
}
