import Product from "./components/products/Product";
import products from "./products";
import TestComponent from "./TestComponent";

/* 
  const products = [
    {
      id: 1,
      nome: '10€ Amazon',
      img: 'https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/b11898_1.jpg',
      prezzo: 2.16,
      prezzoFinale: 14
    },
    {
      id: 2,
      nome: 'Mascherine 50pz',
      img: 'https://mascherine-protezione.com/wp-content/uploads/2021/05/ts-fm01_mask.jpg',
      prezzo: 8,
      prezzoFinale: 20
    }
  ];
*/

function App() {

  // const numeri = [1,2,3,4,5,6,7,8,9];
  // console.log(Math.max(...numeri));

  return (
    <div className="App">
      <h1>Hello World!</h1>

      {/* <TestComponent /> */}

      <section id="card-section">
        {
          products.map(prod => {
            // console.log(prod)
            // return <Product key={prod.id} {...prod } />
            const {id} = prod;
            return <Product key={id} {...prod } />
          })

          // Se si apre la console si nota che c'è un errore
          // ogni child in list deve avere una key UNICA.
          // potrebbe essere assegnato la key a seconda dell'index dell'elemento
          // ma nel caso l'array venisse modificato il valore cambierebbe.
          // E' importante che la key ci sia e sia unica per far capire a react
          // quale elemento dev'essere modificato qual'ora ce ne sia bisogno.

        }
      </section>
    </div>
  );
}

export default App;

// Bisogna mantenere questo file il più pulito possibile