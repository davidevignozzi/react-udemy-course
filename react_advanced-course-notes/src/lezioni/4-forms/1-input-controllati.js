import React, { useState, useEffect } from 'react';

const ControlledInput = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); // previene il comportamento standard dell'evento
    console.log(name, email, phone);
    if (name && email && phone) {
      setPeople([
        ...people,
        {
          id: new Date(Date.now()).getTime().toString(), // uuid?
          name,
          email,
          phone,
          // key: name - value: name.value Thank you es6 <3
        },
      ]);
      setName('');
      setEmail('');
      setPhone('');
    } else {
      alert('form not correct');
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setPhone(value);
  };

  useEffect(() => {
    console.log(people);
  }, [people]);
  return (
    <form
      className="bg-white shadow rounded p-4"
      // onSubmit={handleSubmit}
    >
      {/* Name */}
      <div className="form-group mt-3 d-flex align-items-center justify-content-around container">
        <label
          htmlFor="name"
          className="text-left font-weight-bold col-3"
        >
          Name:
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="col-9 "
        />
      </div>

      {/* Email */}
      <div className="form-group mt-3 d-flex align-items-center justify-content-around container">
        <label
          htmlFor="phone"
          className="text-left font-weight-bold col-3"
        >
          Email:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="col-9 "
        />
      </div>

      {/* Phone */}
      <div className="form-group mt-3 d-flex align-items-center justify-content-around container">
        <label
          htmlFor="phone"
          className="text-left font-weight-bold col-3"
        >
          Phone:
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
          className="col-9 "
        />
      </div>
      <button
        onClick={handleSubmit}
        type="submit"
        className="btn btn-info mt-3 text-white"
      >
        Send
      </button>
    </form>
  );
};

export default ControlledInput;
