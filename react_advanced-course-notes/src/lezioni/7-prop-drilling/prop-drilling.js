import React, { useState } from 'react';
import { data } from '../../data';

const MainComponent = () => {
  const [people, setPeople] = useState(data);

  const removePeople = (id) =>
    setPeople(people.filter((el) => el.id !== id));

  return (
    <div>
      <h2>Passaggio di Proprietà a Cascata</h2>
      <List people={people} removePeople={removePeople} />
    </div>
  );
};

const List = ({ people, removePeople }) => {
  return (
    <>
      {people.map((el) => {
        return (
          <Person key={el.id} {...el} removePeople={removePeople} />
        );
      })}
    </>
  );
};

const Person = ({ name, id, removePeople }) => {
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
