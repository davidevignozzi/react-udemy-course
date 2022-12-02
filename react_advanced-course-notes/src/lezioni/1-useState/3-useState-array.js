import React, { useState } from "react";
import { data } from '../../data';

const ArrayState = () => {

  const [people, setPeople] = useState(data);
  const removeItem = (id) => {

    // verrà creato un'array dove venga soddisfa la condizione. 
    // sarà composto da tutti quei valori in cui l'id non soddisferà la condizione

    /*
     In poche parole diventerà un'array che conterrà tutti gli elementi meno quello che forniamo
     nel momento in cui viene cliccato un elemento verrà fornito l'id dell'elemento cliccato
    */

    let newPeople = people.filter(el => el.id !== id);
    setPeople(newPeople);

  }

  return (
    <>
      {
        people.map((el) => {
          const {id, name} = el;
          return (
            <div key={id} className='item shadow'>
              <h5>{name}</h5>
              <button className="button delete-button" onClick={() => removeItem(id)}>
                x
              </button>
            </div>
          )
        })
      }
    </>
  );
};

export default ArrayState;
