import React, {useState} from "react";

const StateObject = () => {

  // const [name, setName] = useState('Davide');
  // const [age, setAge] = useState(23);
  // const [greeting, setGreeting] = useState('Hello');

  const [person, setPerson] = useState({
    name: 'Davide',
    age: 23,
    greeting: 'Hello'  
  });

  const changeGreeting = () => {
    /*
      setGreeting("it's me, today it's my birthday");
      setAge(24);
    */

    setPerson({
      ...person, // Spread Operator
      age: person.age + 1,
      greeting: "Hey it's my birthday!"
    });

  };

  return <div className="item shadow">
    <div className="text-left">
      <h5>{person.name}</h5>
      <h5>{person.age}</h5>
      <h6>{person.greeting}</h6>
    </div>

    <button className="button" onClick={changeGreeting}>
      Change Greeting
    </button>
  </div>;
};

export default StateObject;
