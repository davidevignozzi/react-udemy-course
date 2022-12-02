import React from 'react';
import { Hero, Card } from '../components';
import { valueCards, teamCards } from '../utils/info';
import image from '../assets/image/about-hero.jpg';
import teamImg from '../assets/image/team-img.jpg';
import useTitle from '../useTitle';

const AboutScreen = () => {
  useTitle('Chi Siamo');
  const quote =
    'Grande è la fortuna di colui che possiede una buona bottiglia, un buon libro e un buon amico.';

  return (
    <>
      <Hero img={image}>
        <section className="about-hero">
          <div className="about-text">
            <div className="topline" />
            <h3>
              <q>{quote}</q>
            </h3>
            <div className="underline" />
          </div>
        </section>
      </Hero>

      {/* Card section */}
      <section className="about-value">
        <div className="container about-value-content">
          <h3 style={{ textTransform: 'uppercase' }}>
            Il nostro progetto
          </h3>
          <div className="card-section">
            {valueCards.map((card) => {
              return (
                <Card
                  key={card.title}
                  {...card}
                  className="value-card"
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="about-team">
        <div
          className="team-img"
          style={{
            background: `url(${teamImg})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        ></div>
        <div className="container about-team-content">
          <h3
            className="brand-secondary-color"
            style={{ textTransform: 'uppercase' }}
          >
            Il nostro Team
          </h3>
          <div className="card-section">
            {teamCards.map((card) => {
              return (
                <Card
                  key={card.title}
                  {...card}
                  className="value-card"
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutScreen;
