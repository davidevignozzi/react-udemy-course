import React from 'react';
import { PropTypes } from 'prop-types';
import { datiIncompleti } from '../../data';

const defaultImage =
  'https://tcdn.storeden.com/gallery/60d073e900f2209682f1e9b6';

const PropComponent = () => {
  return (
    <div>
      {datiIncompleti.map((el) => {
        return <Product key={el.id} {...el} />;
      })}
    </div>
  );
};

const Product = ({ nome, prezzo, image }) => {
  console.log(nome, prezzo, image);

  const img = image && image.url;
  return (
    <article className="card shadow my-3 p-2">
      <div className="card-body">
        <img
          src={img || defaultImage}
          alt={nome || 'divano default'}
          className="card-img-top"
        />
        <div className="card-text">
          <h4 className="card-title">{nome || 'divano default'}</h4>
          <p className="card-subtitle">€ {prezzo || 17.99}</p>
        </div>
      </div>
    </article>
  );
};

Product.propTypes = {
  nome: PropTypes.string.isRequired,
  prezzo: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
};

// Product.defaultProps = {
//   nome: 'divano default',
//   prezzo: 17.99,
// };

export default PropComponent;
