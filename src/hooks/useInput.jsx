import { useState } from 'react';

const useFormInputs = (initialState) => {
  const [inputs, setInputs] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleResetInputs = () => {
    setInputs(initialState);
  };

  return { inputs, setInputs, handleOnChange, handleResetInputs };
};

export default useFormInputs;
