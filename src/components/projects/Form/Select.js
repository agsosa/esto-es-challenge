import { memo } from 'react';
import { Select } from '@chakra-ui/react';
import InputContainer from './shared/InputContainer';
import ErrorText from './shared/ErrorText';

const SelectComponent = memo(({ name, label, formik, options, ...props }) => {
  return (
    <InputContainer>
      <label htmlFor={name}>{label}</label>
      <Select
        name={name}
        id={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        {...props}>
        {Array.isArray(options) &&
          options.map((op) => <option key={op.value} value={op.value} label={op.label || op.value} />)}
      </Select>
      <ErrorText>{formik.touched[name] && formik.errors[name]}</ErrorText>
    </InputContainer>
  );
});

export default SelectComponent;
