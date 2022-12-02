import React, {useState} from "react";

// ! IMPORTANTE
// Gli Hooks devono essere usasti con use davanti
// I componenti devono avere la prima lettere Maiuscola
// Gli Hook devono essere invocati all'interno del corpo/funzione del componente
// Gli Hook non possono essere utilizzati in maniera condizionale

const UsoBase = () => {

  // console.log(useState);
  // console.log(useState("Hello World!"));
  
  // const value = useState()[0];
  // const handler = useState()[1];
  // console.log(value, handler);

  const [title, setTitle] = useState('Hello World!');

  // ***
  // const changeTitle = () => {
  //   setTitle("Changed Hello World!");
  // }

  const changeTitle = () => {
    if(title === 'Hello World!'){
      setTitle("Changed Hello World!");
    } else {
      setTitle('Hello World!');
    }
  }

  return (
    <>
      <h2>{title}</h2>
      <button
        type="button"
        className="btn btn-info shadow my-3"
        onClick={changeTitle}
      >
        Change Title
      </button>
    </>
  );
};

export default UsoBase;
