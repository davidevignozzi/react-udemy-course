import React, { useState, useContext } from 'react';
import { data } from '../../data';

// il context è possibile immaginarlo come un wrapper che va ad
// impacchettare i nostri componenti
// tutti i componenti che sono inclusi all'interno di questo
// wrapper avranno accesso a tutte le funzioni e state che
// sono stati dichiarati all'interno del context

const AppContext = React.createContext();

const MainComponent = () => {
  const [people, setPeople] = useState(data);

  const removePeople = (id) =>
    setPeople(people.filter((el) => el.id !== id));

  return (
    <AppContext.Provider
      value={{
        people,
        removePeople,
      }}
    >
      <div>
        <h2>useContext</h2>
        <List />
      </div>
    </AppContext.Provider>
  );
};

const List = () => {
  const info = useContext(AppContext);
  return (
    <>
      {info.people.map((el) => {
        return <Person key={el.id} {...el} />;
      })}
    </>
  );
};

const Person = ({ name, id }) => {
  const { removePeople } = useContext(AppContext);
  return (
    <article className="item shadow">
      <h5>{name}</h5>
      <button
        className="button delete-button"
        onClick={() => removePeople(id)}
      >
        x
      </button>
    </article>
  );
};

export default MainComponent;
