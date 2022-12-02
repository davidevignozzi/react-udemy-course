import React, { useState, useEffect } from 'react';
import Values from 'values.js';
import SingleColor from './SingleColor';
import { v4 as uuidv4 } from 'uuid';

const ColorGrading = () => {
  const [isError, setIsError] = useState(false);
  const [selectedColor, setSelectedColor] = useState([]);
  const [colorInput, setColorInput] = useState({
    color: '',
    qty: 5,
  });

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (colorInput.color && colorInput.qty) {
      const { color, qty } = colorInput;
      try {
        setSelectedColor(
          new Values(color).all(
            Math.round(100 / parseInt(qty, 10)) * 2
          )
        );
        setColorInput({
          color: '',
          qty: 5,
        });
      } catch (error) {
        setIsError(true);
      }
      setSelectedColor(
        new Values(color).all(Math.round(100 / parseInt(qty, 10)) * 2)
      );
    }
  };

  // Change
  const handleChange = (e) => {
    if (isError) {
      setIsError(false);
    }
    const { name, value } = e.target;
    setColorInput({
      ...colorInput,
      [name]: value,
    });
  };

  // Initial Color
  useEffect(() => {
    setColorInput({ qty: 5, color: '#dcdcdc' });
    setSelectedColor(
      new Values('#dcdcdc').all(Math.round(100 / 5) * 2)
    );
  }, []);
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <input
            type="text"
            name="color"
            id="color"
            value={colorInput.color}
            maxLength={7}
            onChange={handleChange}
            className="input"
          />
          <input
            type="number"
            name="qty"
            id="qty"
            value={colorInput.qty}
            max={15}
            min={2}
            step={1}
            onChange={handleChange}
            className="input"
          />
        </div>
        <button className="btn btn-selector" type="submit">
          Create
        </button>
      </form>

      <section className="color-section">
        {
          // Display Error
          isError ? (
            <h4 className="section-center">No color Found</h4>
          ) : // Display Palette Correctly
          selectedColor.length > 0 ? (
            selectedColor.map((el) => (
              <SingleColor key={uuidv4()} {...el} />
            ))
          ) : (
            // Display Loading
            <h4>Loading...</h4>
          )
        }
      </section>
    </>
  );
};

export default ColorGrading;
