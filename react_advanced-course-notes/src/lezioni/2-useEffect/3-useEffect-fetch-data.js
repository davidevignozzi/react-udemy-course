import React, { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://api.github.com/users';

const FetchComponent = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    /*
      axios
        .get(url)
        .then((res) => setUsers(res.data))
        .catch((err) => console.log(err));
    */

    const res = await axios.get(url);
    console.log(res);
    setUsers(res.data);
  };

  // Lo useEffect non può essere una funziona asincrona
  // in quanto viene eseguito una volta che il componente viene renderizzato
  useEffect(() => {
    getData();
  }, []); // at the first render

  return (
    <div>
      <h1>Fetch Component</h1>
      <ul className="users">
        {users.map((el) => {
          const { login, id, avatar_url: img, html_url } = el;
          return (
            <li key={id} className="shadow">
              <img src={img} alt="login" />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FetchComponent;
