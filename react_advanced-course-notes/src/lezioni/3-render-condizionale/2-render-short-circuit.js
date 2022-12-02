import React, { useState } from 'react';

// *** Short Circle Evaluation
// un'espressione che ritorna un valore in base allo stato di una costante o una variabile
// che noi vogliamo andare a valutare e varia il return di quest'espressione

const ShortRender = () => {
  // const [word, setWord] = useState('Word');
  // const [word, setWord] = useState(false);
  // const [word, setWord] = useState(null);
  // const [word, setWord] = useState(undefined);
  // const [word, setWord] = useState(0);

  const [word, setWord] = useState('');
  const [toggle, setToggle] = useState(false);

  // Short Circle Evaluation with or operator
  const example = word || 'example';

  // Short Circle Evaluation with and operator
  // return un valore solo quando la condizione di parola è soddisfatta
  const example2 = word && 'Value';
  // const example2 = !word && 'Value';

  // *** Ternary operator
  const example3 = word === 'Value' ? "it's True" : "it's False";
  /*
    if(word === 'Value'){
      return "it's True"
    } else {
      return "it's False"
    }
  */
  // Example

  return (
    <div>
      <h2>{example}</h2>
      <h2>{example2}</h2>
      {!word && <h4>I'm a Component</h4>}

      {/* Not possible */}
      {/* 
        {
          if(word){`<h2>Something</h2>`}
        }
      */}

      <h1>{example3}</h1>

      <hr />

      <h1>{word || 'Example if is not present a value'}</h1>
      {toggle ? (
        <h2 className="text-success">True</h2>
      ) : (
        <h5 className="text-danger">False</h5>
      )}
      <button className="button" onClick={() => setToggle(!toggle)}>
        Change
      </button>
    </div>
  );
};

export default ShortRender;
