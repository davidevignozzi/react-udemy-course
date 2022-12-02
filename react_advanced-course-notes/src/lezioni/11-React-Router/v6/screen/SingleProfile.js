import React from 'react';
import { useParams } from 'react-router-dom';

const SingleProfile = () => {
  const { id } = useParams();
  console.log(id);
  return <div>Davide my id is {id}</div>;
};

export default SingleProfile;
