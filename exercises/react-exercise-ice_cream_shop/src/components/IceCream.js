import React from 'react';

const IceCream = ({ nome, descrizione, img, prezzo, categoria }) => {
  return (
    <article className="gelato">
      <div className="img-container">
        <img src={img} alt={nome} className="img" />
      </div>
      <div className="prd-info" style={{ width: '100%' }}>
        <header className="prd-header">
          <h5>{nome}</h5>
          <h6>{categoria}</h6>
          <span className="prd-prezzo">
            <h6>{(prezzo / 100).toFixed(2)}€</h6>
          </span>
        </header>
        <p>{descrizione}</p>
      </div>
    </article>
  );
};

export default IceCream;
