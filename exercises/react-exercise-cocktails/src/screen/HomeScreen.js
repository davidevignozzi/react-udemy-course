import React, { useEffect, useState } from 'react';
import {
  Hero,
  Cocktails,
  Loading,
  ErrorMessage,
} from '../components';
import { FaSearch } from 'react-icons/fa';
import Lottie from 'lottie-react';
import animationData from '../assets/animation/drink-animation.json';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import useTitle from '../useTitle';

const HomeScreen = () => {
  useTitle('Home');
  const {
    query,
    isLoading,
    data,
    isError,
    count,
    searchCocktail,
    deleteScrollposition,
    scrollPosition,
  } = useGlobalContext();

  const [input, setInput] = useState(query);

  // On Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    searchCocktail(input);
  };

  // To capitalize first letter in input
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // go back from single coctail to position where clicked
  useEffect(() => {
    if (scrollPosition) {
      window.scrollTo(0, scrollPosition);
      deleteScrollposition();
    }
  }, []);
  return (
    <>
      <Hero>
        <div className="home-hero">
          <div className="home-hero-text">
            <div className="home-hero-title">
              <h2 className="brand-color">DRINK TEAM</h2>
              <h4>Tutti i Cocktails del mondo a portata di click</h4>
              <p>
                Drink Team è un database internazionale che mette a
                tua disposizione, in maniera{' '}
                <span className="brand-color">Gratuita</span>, le
                ricette più importanti e i cocktails più diffusi al
                mondo
              </p>
              <Link to="/about" className="btn btn-primary">
                Scopri di più
              </Link>
            </div>
          </div>
          <div className="home-hero-img">
            <Lottie
              animationData={animationData}
              loop={true}
              autoPlay={true}
              reversed={true}
              height={350}
            />
          </div>
        </div>
      </Hero>
      <section className="container home-screen">
        <div className="search-bar">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <label htmlFor="drink">
                <h4>Cerca il tuo Drink</h4>
              </label>
              <div className="input-search">
                <input
                  type="text"
                  id="drink"
                  className="input"
                  placeholder={capitalize(query)}
                  value={capitalize(input)}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button className="btn icon-btn" type="submit">
                  <FaSearch className="icon" />
                </button>
              </div>
            </form>
          </div>
          <p className="result">{`${count} Risultati`}</p>
        </div>
        {!isLoading && isError ? (
          <ErrorMessage>Nessun Cocktail trovato.</ErrorMessage>
        ) : !isLoading && !isError ? (
          <Cocktails data={data.drinks} />
        ) : (
          <Loading />
        )}
      </section>
    </>
  );
};

export default HomeScreen;
