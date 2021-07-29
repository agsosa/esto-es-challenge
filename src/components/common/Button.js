// Custom button component

import tw from 'twin.macro';
import { Spinner } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Btn = tw.button`
flex justify-around items-center space-x-2 
bg-primary-500 text-white
transition duration-500 hover:bg-primary-700
px-2 sm:px-3 md:px-5 py-2
rounded-md
disabled:opacity-50 disabled:cursor-not-allowed`;

export default function Button({ icon, label, isLoading, ...props }) {
  return (
    <Btn {...props}>
      {isLoading && <Spinner />}
      {icon}
      <span>{isLoading ? "Please wait..." : label}</span>
    </Btn>
  );
}

Button.defaultProps = {
  isLoading: false,
  label: "",
  icon: null,
}

Button.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
  isLoading: PropTypes.bool
}
