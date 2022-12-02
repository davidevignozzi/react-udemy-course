import React from "react";

//Far vedere che il componente non si riaggiorna ma la variabile si
//Spiegare che cosa è un React Fragment e che è possibile abbreviarlo

const ErroreBase = () => {
  let title = 'Hello World!';

  const changeTitle = () => {
    title = 'New Hello';
    console.log(title);

    // In log il titolo cambia
    // Nel dom il titolo non cambia
    
  }

  return <React.Fragment>
    <h1>{title}</h1>
    <button
      type="button"
      className="btn btn-info my-3"
      onClick={changeTitle}
    >
      Change Title
    </button>
  </React.Fragment>
};

export default ErroreBase;
