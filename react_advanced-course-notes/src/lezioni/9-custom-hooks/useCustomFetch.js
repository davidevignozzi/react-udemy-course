import { useState, useEffect } from 'react';
import axios from 'axios';

const useCustomFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // TODO State for error

  // Call API
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(url);
        setData(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    })();
  }, [url]);

  return { data, isLoading };
};

export default useCustomFetch;
