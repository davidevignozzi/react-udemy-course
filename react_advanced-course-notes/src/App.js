import Inizio from './lezioni/1-useState/1-errore-base';

function App() {
  return (
    <div className="App">
      <section className="container text-center my-3">
        <Inizio />
      </section>
    </div>
  );
}

export default App;

/* Routing

import { BrowserRouter as Router, Link } from 'react-router-dom';

<Router>
  <nav className="d-flex flex-row justify-content-center mx-auto gap-2 mb-4">
    Link != <a href> best because not refresh
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/profile">Profile</Link>
  </nav>
</Router>;

*/
