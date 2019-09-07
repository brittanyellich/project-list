/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

export default function Button() {
  const [buttonText, setButtonText] = useState('Click me');

  function handleClick() {
    return setButtonText('ya done clicked!');
  }
  return (
    <button onClick={handleClick}>{buttonText}</button>
  );
}
