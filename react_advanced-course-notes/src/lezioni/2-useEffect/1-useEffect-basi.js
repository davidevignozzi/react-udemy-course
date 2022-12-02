import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

// *** useEffect
// Cos'è? A cosa serve?
// E' l'hook che è responsabile di gestire e manipolare quella serie di azioni
// che sono definiti sideEffect
// il sideEffect è un'azione o una manipolazione che non avviene all'interno del
// componente.

// ***
// Viene chiamato ogni volta che viene fatto un render del nostro componente (Dopo il render);
// Ogni volta che avrò una manipolazione di uno state avrò una chiamato allo useEffect

// *** Render Condizionale
// Basato sul verificarsi e il variare del valore di uno state
// Gli hook non possono essere chiamati dentro un if

// *** Secondo parmetro
// Un metodo per dichiarare quando lo useEffect venga effettivamente chiamato
// ci è dato dal secondo parametro ovvero un'array []
// questo array deve contenere tutti i valori alla quale variazione chiama lo useEffect
// Quando l'array è vuoto vuol dire che va eseguito solo al primo render

const useEffectBasi = () => {
  // Ogni volta che viene mutato lo state verrà fatto un nuovo render
  const [value, setValue] = useState(0);

  const aumenta = () => {
    setValue((oldValue) => oldValue + 1);
  };

  // ***
  // E' possibile anzi probabile che verranno usati più useEffect
  // Ad esempio possiamo chiamarne uno ad ogni render
  /*
    const itWorks = () => {
      console.log('second useEffect');
    };
    useEffect(itWorks);
  */

  // il primo parmatero è una callback function
  useEffect(() => {
    // console.log('useEffect');
    console.log('Sono useEffect');
    // document.title = 'useEffect Title';

    if (value > 0) {
      document.title = `Nuovo Messaggio: ${value}`;
    } else {
      document.title = `Nessun Messaggio`;
    }

    // *** CleanUP
    /*
      una funzione che viene definita ad ogni esecuzione dello useEffect
      e viene lanciata prima del succesivo render.
      prima della successiva esecuzione dello useEffect
    */

    return () => console.log('cleanup function chiamata');

    // }, []); // solo al primo render
  }, [value]); // alla variazione di value

  return (
    <div className="item">
      <h4>
        Value: <span>{value}</span>
      </h4>

      <button className="button" onClick={aumenta}>
        Aumenta
      </button>
    </div>
  );
};

export default useEffectBasi;
