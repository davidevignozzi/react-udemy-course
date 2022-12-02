import React, { useState, useEffect } from 'react';

// *** CleanUP
/*
  una funzione che viene definita ad ogni esecuzione dello useEffect
  e viene lanciata prima del succesivo render.
  prima della successiva esecuzione dello useEffect
*/

const CleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);
  // Voglio cambiare size a seconda di quale sia la dimensione della finestra.

  console.log('render');

  const windowSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log('set addEventListener');
    window.addEventListener('resize', windowSize);

    // CleanUp
    return () => {
      console.log('remove addEventListener');
      window.removeEventListener('resize', windowSize);
    };
  });

  return (
    <div
      className="container w-75 col-6 offset-3 bg-white shadow py-4"
      style={{ textAlign: 'center' }}
    >
      <h1> {size} </h1>
    </div>
  );
};

export default CleanUp;
