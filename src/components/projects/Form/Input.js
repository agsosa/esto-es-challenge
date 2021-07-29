// Input component compatible with formik

import { memo } from 'react';
import { Input } from '@chakra-ui/react';
import InputContainer from './shared/InputContainer';
import ErrorText from './shared/ErrorText';
import PropTypes from 'prop-types';

const InputComponent = memo(({ label, type = "text", placeholder = "", name, formik, ...props }) => {
  if (!formik) return null;

  return (
    <InputContainer>
      <label htmlFor={name}>{label}</label>
      <Input
        placeholder={placeholder}
        type={type}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        name={name}
        id={name}
        value={formik.values[name]}
        {...props}
      />
      <ErrorText>{formik.touched[name] && formik.errors[name]}</ErrorText>
    </InputContainer>
  );
});

export default InputComponent;

InputComponent.defaultProps = {
  label: "",
  type: "text",
  placeholder: "", 
}

InputComponent.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  formik: PropTypes.object.isRequired
}