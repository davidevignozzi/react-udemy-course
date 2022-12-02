import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About</h1>
      <button
        className="btn btn-success mt-4"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </div>
  );
};

export default About;
