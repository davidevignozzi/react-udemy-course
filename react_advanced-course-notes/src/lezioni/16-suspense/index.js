import React, { Suspense } from 'react';
import Spinner from './components/Spinner';

// import Comments from './components/Comments';
// import Photos from './components/Photos';
const Photos = React.lazy(() => import('./components/Photos'));
const Comments = React.lazy(() => import('./components/Comments'));

/**
 * Questi componenti non è fondamentale che siano lì al primo render
 * Nel momento in cui carica mostrali
 *
 */

const Component = () => {
  return (
    <div className="container ">
      <h2 className="text-center">Suspense</h2>

      {/* Spinner per 2 componenti */}
      {/* <Suspense
        fallback={
          <div className="mt-5">
            <Spinner />
          </div>
        }
      >
        <Photos />
        <Comments />
      </Suspense> */}

      {/* Spinner per ogni componente */}
      <Suspense
        fallback={
          <div className="mt-5">
            <Spinner />
          </div>
        }
      >
        <Photos />
      </Suspense>

      <Suspense
        fallback={
          <div className="mt-5">
            <Spinner />
          </div>
        }
      >
        <Comments />
      </Suspense>
    </div>
  );
};

export default Component;
