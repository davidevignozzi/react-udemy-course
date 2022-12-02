import { useState, useEffect } from 'react';
import axios from 'axios';
import { async } from 'q';

const searchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?';
const singleUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?';

const useFetch = (query, type = false) => {
  const url = type ? singleUrl : searchUrl;

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    (async (query) => {
      try {
        const res = await axios.get(`${url}${query}`);
        setIsError(false);
        setData(res.data);
        setCount(res.data.drinks.length);
        // console.log(res.data);
      } catch (err) {
        setIsError(true);
        setCount(0);
        console.error(err);
      }
      setIsLoading(false);
    })(query);
  }, [url, query]);
  return { isLoading, data, isError, count };
};

export default useFetch;
