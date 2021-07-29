import tw from 'twin.macro';
import { useEffect, useState } from 'react';

const Input = tw.input`border py-2 px-2 sm:px-4 rounded-lg mr-3`;

export default function Search({ onSearch }) {
  const [text, setText] = useState('');

  // Trigger onSearch callback after the user stops typing (1 second delay)
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (onSearch) onSearch(text);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [text]);

  const handleChange = (e) => setText(e.target.value);

  return <Input placeholder='Search by project name...' value={text} onChange={handleChange} />;
}
