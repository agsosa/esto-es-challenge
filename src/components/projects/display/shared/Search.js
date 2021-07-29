/*
  Component to search. The onSearch callback will be called after the user stops typing (1 second delay)

  To use simply pass an onSearch(text) callback through props
*/

import tw from 'twin.macro';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Input = tw.input`border py-2 px-2 sm:px-4 rounded-lg mr-3`;

export default function Search({ onSearch }) {
  const [text, setText] = useState('');

  // Trigger onSearch callback after the user stops typing (1 second delay)
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (onSearch) onSearch(text);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [text, onSearch]);

  const handleChange = (e) => setText(e.target.value);

  return <Input placeholder='Search by project name...' value={text} onChange={handleChange} />;
}

Search.defaultProps = {
  onSearch: null,
}

Search.propTypes = {
  onSearch: PropTypes.func
}