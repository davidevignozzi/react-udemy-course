import React, { useTransition } from 'react';
import ProductList from './components/ProductList';
import { data } from './assets/data';

/**
 *
 * useTransition restituisce isPending
 * useDeferred value è consigliato usarlo (da documentazione)
 * quando otteniamo un valore da una libreria esterna
 * o comunque da ternze parti
 *
 */

const Component = () => {
  // Permetterci di indicare cos'è prioritario e cosa no
  const [isPending, startTransition] = useTransition();

  const [inputValue, setInputValue] = React.useState('');
  const [filteredProducts, setFilteredProducts] =
    React.useState(data);

  const handleChange = (e) => {
    const { value } = e.target;

    // Il fatto che avvenga questo update di state non è così importante.
    startTransition(() => {
      setInputValue(value);
    });
  };

  React.useEffect(() => {
    if (!inputValue) {
      setFilteredProducts(data);
    }
    setFilteredProducts(
      data.filter((el) => el.text.includes(inputValue))
    );
  }, [inputValue]);

  return (
    <div className="mt-4">
      <div className="d-flex justify-content-center">
        <input
          type="text"
          className="input-group-text bg-white"
          onChange={handleChange}
        />
      </div>

      {/* is Pending va a marcare che questa transizione è in corso */}
      {isPending ? (
        <h4>Loading...</h4>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
};

export default Component;
