import React from 'react'

const TestComponent = () => {
  return (
    <section>
      <Saluto />
    </section>
  )
}

const Persona = () => {
  return <h2>
    Ciao sono Davide
  </h2>
}

const Messaggio = () => {
  return <h4>
    Sono un messaggio
  </h4>
}

const Saluto = () => {
  return <React.Fragment>
    <Persona />
    <Messaggio />
  </React.Fragment>
}

export default TestComponent

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


// ? Lezione 17 => Regaole della sintassi JSX
// ***
// Creare un componente è come usare la funzione 

  /* 

    React.createElement(
      'h1', // Che tipo di elemento HTML andremo a scrivere
      {}, // Eventuali props
      'ciao' // Contenuto dell'elemento
    ); 

    React.createElement(
      'div', 
      {}, 
      'React.createElement(
        'h1',
        {}, 
        'Ciao sono dentro un div' 
      );' 
    );

  */

// Si può scrivere più semplicemente con un'arrow function

  /*
    const TestComponent = () => {
      return (
        <div>
          <h1>Ciao sono dentro un div</h1>
        </div>
      )
    }
  */

// importante anche che il tag di apertura o la parentesi del return
// in linea con il return appunto.

//***
// In JSX è importante chiudere tutti i tag:

/*
    <input type="text"> in JSX => <input type="text" />
    <img src="" alt=""> in JSX => <img src="" alt="" />
*/

// Importante anche il camelCase:

/*
  <button onclick="function()"> in JSX => <button onClick={function}">
*/

// Anche il modo di attribuire una classe cambia:

/*
    <h2 class="">Titolo</h2> in JSX => <h2 className="">Titolo</h2>
*/

// ? Lezione 18 => Componenti Innestati
/*
  const TestComponent = () => {
    return (
      <section>
        <Saluto />
      </section>
    )
  }

  const Persona = () => {
    return <h2>
      Ciao sono Davide
    </h2>
  }

  const Messaggio = () => {
    return <h4>
      Sono un messaggio
    </h4>
  }

  const Saluto = () => {
    return <React.Fragment>
      <Persona />
      <Messaggio />
    </React.Fragment>
  }
*/