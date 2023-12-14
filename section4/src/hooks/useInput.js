// scr > hooks > useInput.js

import { useState } from 'react';

export default function useInput() {
  const [ value, setValue ] = useState('');

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  return [ value, handleChangeValue ];
}