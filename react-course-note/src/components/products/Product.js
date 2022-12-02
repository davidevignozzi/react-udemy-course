import React from 'react'
import './Product.css'

/* 
  const product = {
    img: 'https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/b11898_1.jpg',
    title: '10€ Amazon',
    price: '2,16',
    winning: 'Davide',
    state: 'Riapre presto',
    buyNow: '14€'
  }
*/

const Product = ({prezzoFinale, nome, prezzo, img, children}) => {
  // const {prezzoFinale, nome, prezzo, img} = props;
  const handleClick = () => {
    alert('Pressed')
  };
  const paramsHandler = (price) => {
    alert(price);
  };
  const eventHandler = (price) => (e) => {
    alert(e.target.innerText)
    console.log(price);
  };

  function prezzoPieno(price){
    return function prova(e){
      alert(e.target.innerText)
      console.log(price);
    }
  }

  return (
    <article>
      <div className="card">
        <img src={img} alt={`${nome}`} />
        <h1>{nome}</h1>
        <p>{prezzo} €</p>
        <p>{children}</p>

        {/* <button onClick={() => alert('Pressed')}>{prezzoFinale} €</button>
        
          il primo metodo è quello di andare a dichiarare la funzione all'interno del onClick 
          con un'arrow function

        */}

        <button onClick={handleClick}>{prezzoFinale} €</button>
        <button onClick={() => paramsHandler(prezzo)}>{prezzoFinale} €</button>
        <button onClick={eventHandler(prezzo)}>{prezzoFinale} €</button>
        <button onClick={prezzoPieno(prezzo)}>{prezzoFinale} €</button>
      </div>
    </article>
  )
}

export default Product