/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';

export default function NewProjectButton() {
  const [buttonText, setButtonText] = useState('Add New');

  function handleClick() {
    return setButtonText('ya done clicked!');
  }
  return (
    <Button onClick={handleClick} color="green">{buttonText}</Button>
  );
}
