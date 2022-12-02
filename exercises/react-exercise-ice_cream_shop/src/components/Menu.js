import React, { useEffect, useState } from 'react';
import IceCream from './IceCream';
import axios from 'axios';
import data from '../fakeData';

const url =
  'https://react--course-api.herokuapp.com/api/v1/data/gelateria';

const Menu = () => {
  // Loading state for data fetching
  const [isLoading, setIsLoading] = useState(true);

  // Error Handling State
  const [isError, setIsError] = useState(false);

  // all products
  const [products, setProducts] = useState(data);

  // Active Btn Selector
  const [selected, setSelected] = useState(0);

  // products filtered from the products State
  const [filterProducts, setFilterProducts] = useState();

  // Categories of products
  const [categories, setCategories] = useState([]);

  const productFilter = (category, index) => {
    setSelected(index);
    if (category === 'all') {
      setFilterProducts(products);
    } else {
      setFilterProducts(
        products.filter((el) => (el.categoria === category ? el : ''))
      );
    }
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const res = await axios.get(url);
        // Products
        setProducts(res.data.data);
        setFilterProducts(res.data.data);

        // Categories
        const newCategories = Array.from(
          new Set(res.data.data.map((el) => el.categoria))
        );
        newCategories.unshift('all');

        setCategories(newCategories);

        setIsLoading(false);
        setIsError(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
        setIsError(true);
      }
    })();
  }, []);

  return (
    <div className="container">
      <h4 style={{ textAlign: 'center', textTransform: 'uppercase' }}>
        Our choises
      </h4>
      {!isLoading && !isError ? (
        <>
          <div className="lista-categorie">
            {categories.map((category, index) => {
              return (
                <button
                  key={index}
                  onClick={() => productFilter(category, index)}
                  className={`btn btn-selector ${
                    index === selected && 'active'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
          <div className="vetrina">
            {filterProducts.map((el) => (
              <IceCream key={el.id} {...el} />
            ))}
          </div>
        </>
      ) : // Error Section
      !isLoading && isError ? (
        <h4
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          Error...
        </h4>
      ) : (
        // Loading Section
        <h4
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          Loading
        </h4>
      )}
    </div>
  );
};

export default Menu;
