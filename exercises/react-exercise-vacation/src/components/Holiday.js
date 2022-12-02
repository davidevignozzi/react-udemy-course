import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleHoliday from './SingleHoliday';
const url =
  'https://react--course-api.herokuapp.com/api/v1/data/vacanze';

const Holiday = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(0);

  // function to select next value of selected and next vacation
  const nextHoliday = () => {
    setSelected((prevValue) => {
      if (prevValue + 1 === data.data.length) {
        return 0;
      } else {
        return prevValue + 1;
      }
    });
  };

  // function to select prev value of selected and prev vacation
  const prevHoliday = () => {
    setSelected((prevValue) => {
      if (prevValue - 1 < 0) {
        return data.data.length - 1;
      } else {
        return prevValue - 1;
      }
    });
  };

  // function to fetch data from api
  const getData = async () => {
    try {
      const res = await axios.get(url);
      // console.log('res from api', res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Conditional Return
  if (data.success) {
    return (
      <>
        {
          // Ternary operator
          data.data.length > 0 ? (
            <SingleHoliday
              {...data.data[selected]}
              next={nextHoliday}
              prev={prevHoliday}
            />
          ) : (
            <h4>There is no Vacation</h4>
          )
        }
      </>
    );
  } else {
    return <h2>...Loading</h2>;
  }
};

export default Holiday;
