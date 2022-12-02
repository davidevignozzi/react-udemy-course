import React, { useState, useEffect } from 'react';
import { rgbToHex } from '../utils/helpers';

const SingleColor = ({ rgb, type, weight }) => {
  const [message, setMessage] = useState(false);

  // To copy selected color
  const copyColor = () => {
    navigator.clipboard
      .writeText(rgbToHex(...rgb))
      .then((response) => console.log('copied'));
    setMessage(true);
  };

  // To make disappear the message
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]);
  return (
    <article
      onClick={copyColor}
      className={`single-color ${type}`}
      style={{ backgroundColor: rgbToHex(...rgb) }}
    >
      {' '}
      <h5>{rgbToHex(...rgb)}</h5>
      {message && <p>Color copied in the clipboard</p>}
    </article>
  );
};

export default SingleColor;
