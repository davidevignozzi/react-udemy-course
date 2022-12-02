import { useState, useEffect } from 'react';
import data from './data';
import Article from './Article';

//Funzione che se presente 'Theme' nel localStorage
// returna il suo valore o di default return 'light-mode'

const getThemeFromLocalStorage = () => {
  if (localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  } else {
    return 'light-mode';
  }
};

function App() {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  // change Theme function
  const changeTheme = () => {
    if (theme === 'light-mode') {
      setTheme('dark-mode');
    } else {
      setTheme('light-mode');
    }
  };

  // if theme change class of htmlTag will change
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <section className="section-center">
      <div className="container">
        <button className="btn" onClick={changeTheme}>
          Change
        </button>

        <section className="article-section">
          {data.map((el) => (
            <Article key={el.id} {...el} />
          ))}
        </section>
      </div>
    </section>
  );
}

export default App;
