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