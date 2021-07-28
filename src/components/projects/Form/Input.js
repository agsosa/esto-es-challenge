import tw from 'twin.macro';
import { Input } from '@chakra-ui/react';
import InputContainer from './shared/InputContainer';
import ErrorText from './shared/ErrorText';

export default function Form({ label, type = "text", placeholder = "", name, formik, ...props }) {
  if (!formik) return null;

  return (
    <InputContainer>
      <label htmlFor={name}>{label}</label>
      <Input
        placeholder
        type
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        name={name}
        id={name}
        value={formik.values[name]}
        {...props}
      />
      <ErrorText>{formik.errors[name]}</ErrorText>
    </InputContainer>
  );
}
