import React, { useState, useEffect } from 'react';

const HideorShowComponent = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="card shadow mt-5 p-5">
      <button
        className="button w-50 col-6 offset-3 shadow"
        onClick={() => setShow(!show)}
      >
        {/* Ternary operator */}
        {show ? 'Hide' : 'Show'}
      </button>

      {/* Short Circuit Evaluation */}
      {show && <El />}
    </div>
  );
};

const El = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounter((oldValue) => oldValue + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [counter]);

  return (
    <div>
      <h2>{counter}</h2>
    </div>
  );
};

export default HideorShowComponent;
