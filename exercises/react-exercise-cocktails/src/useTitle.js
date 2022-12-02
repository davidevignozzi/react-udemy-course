import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Drink Team - ${title}`;
  }, [title]);
};

export default useTitle;
