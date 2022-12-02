import React, { useState } from "react";

const CounterComponent = () => {
  const [counter, setCounter] = useState(0);

  const decreaseCounter = () => {
    setCounter(counter - 1);
  }
  
  const increaseCounter = () => {

    /*
      setCounter(oldVal => {

        Limit to stop to 4 for example
        if(oldVal + 1 === 5){
          return oldVal;
        }
        
        return oldVal + 1; 
      })
    */

    // Il contatore aumenterà dopo 2sec
    // Se richiamiamo la funzione ma clicchiamo più volte avremo qualche problema:
    // Se clicchiamo 10 volte prima dei due secondi aumenterà comunque di 1
    /*
      setTimeout(function(){
        setCounter(counter + 1);
      }, 2000)
    */

    setTimeout(function(){
      setCounter((oldVal) => {
        return oldVal + 1
      });
    }, 2000)

    /**
     * * Il functional return può essere utilizzato per gestire qualunque aggiornamento di state
     * 
     * Quando si va ad inserire un valore che è fisso utilizzare un value return.
     * Quando invece l'aggiornamento del valore dipendesse in qualche modo da quello precedente,
     * Quando c'è una relazione tra l'aggiornamento e uno stato attuale
     * es. (value + 5)
     * Utilizzare il functional return
     * 
    **/
    
  }

  const resetCounter = () => {
    setCounter(0);
  }

  return (
    <div className="bg-white shadow rounded py-5 w-75 col-6 offset-3">
      <h3>{counter}</h3>
      <div className="d-flex justify-content-around">
        <button className="button w-25 my-2" onClick={decreaseCounter}>-</button>
        <button className="button w-25 my-2" onClick={increaseCounter}>+</button>
        <button className="button w-25 my-2" onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
};

export default CounterComponent;
