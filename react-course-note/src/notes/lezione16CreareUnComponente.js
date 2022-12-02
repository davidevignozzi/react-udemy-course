// ? Lezione 16 => Creare un Componente
// ***
// il metodo di esportazione defalut permette di rinominare
// il componente nel momento in cui verrà importato.

// Esempio (
//     import NomeACaso from 'TestComponent'
// )

// Se invece si fosse espoertato con 

// export {TestComponent}

// Non ci sarebbe stato modo di chiamarlo in altri modi in altre
// parti del codice.

// ***
// L'arrow function non è l'unico modo di creare un componente.
// Poichè avremmo potuto creare lo stesso medesimo componente in 
// questo modo :

// export default function TestComponent() {
//   return (
//     <div>TestComponent</div>
//   )
// }

// ***
// Un Componente deve sempre ritornare qualcosa.
// Più specificatamente deve ritornare per forza un'unica cosa
// nel senso che un componente non può ritornare più di una cosa
// Per ritornare più elementi si può utilizzare un react Fragment 

// <React.Fragment>
//     <div>Primo</div>
//     <div>Secondo</div>
// </React.Fragment>    
