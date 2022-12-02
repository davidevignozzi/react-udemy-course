import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import animationData from '../assets/animation/not-found.json';
import { Link } from 'react-router-dom';
import useTitle from '../useTitle';

const ErrorScreen = () => {
  useTitle('Pagina non trovata');
  return (
    <Wrapper>
      <h3>Pagina Non Trovata</h3>
      <Lottie
        animationData={animationData}
        loop={true}
        autoPlay={true}
        rendererSettings={
          (SVGAnimatedPreserveAspectRatio = 'xMidYMid slice')
        }
        style={{ width: '50vw', height: '50vh' }}
      />
      <Link to="/" className="btn btn-primary">
        Torna alla Home
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 86.2vh;
  display: grid;
  display: -ms-grid;
  display: -moz-grid;
  display: -webkit-grid;
  place-items: center;
  h3 {
    text-transform: uppercase;
  }
  .btn {
    border-radius: 22px;
  }
  @media screen and (min-width: 992px) {
    min-height: 84.5vh;
  }
`;

export default ErrorScreen;
