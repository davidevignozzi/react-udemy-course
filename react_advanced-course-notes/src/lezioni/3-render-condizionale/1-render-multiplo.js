import React, { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://api.github.com/users/QuincyLarson';

// ***

const ConditionalCompining = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState({});

  const getData = async () => {
    // Start api Call
    setIsError(false);
    setIsLoading(true);

    try {
      // if api response = true
      const res = await axios.get(url);
      setUser(res.data);
    } catch (error) {
      // if api response = false
      setIsError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  {
    return (
      <article className="card d-flex align-items-center p-5 shadow mt-5">
        <img
          src={user.avatar_url}
          alt={user.login}
          style={{ width: '80px', height: '80px' }}
          className="rounded-circle my-4 shadow"
        />
        <h2>{user.login}</h2>
      </article>
    );
  }
};

// ? Loading Component
const Loading = () => {
  return (
    <div>
      <h2>Loading...</h2>
    </div>
  );
};

// ? Error Component
const Error = () => {
  return (
    <div>
      <h2>Sorry there is an Error</h2>
    </div>
  );
};

export default ConditionalCompining;
