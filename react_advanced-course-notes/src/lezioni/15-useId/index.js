import React, { useId } from 'react';

//useId non viene usato per le key (<li key={id} SBAGLIATO! />)
const Component = () => {
  const id = useId();

  return (
    <div className="mt-4">
      <label htmlFor={id}>Cos'è un ID?</label>
      <input
        type="checkbox"
        nome="react"
        id={id}
        className="input-group-text bg-white"
      />

      <label htmlFor={id}>Cos'è un ID?</label>
      <input
        type="checkbox"
        nome="react"
        id={id + 'check'}
        className="input-group-text bg-white"
      />
    </div>
  );
};

export default Component;
