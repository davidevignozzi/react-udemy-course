import React, { useReducer } from 'react';
// useReducer ci viene in aiuto quando abbiamo un'applicazione più complessa
import Modal from './Modal';
import reducer from './reducer';
import { OPEN_MODAL, CLOSE_MODAL } from './actions';

const initialState = {
  isModalOpen: false,
  modalContent: "I'm a Modal",
};

const Index = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // dispatch => {
  //    una funzione che ha il compito di delegare ad una funzione esterna
  //    il compito di mutare il nostro state
  // }

  const openModal = () => {
    dispatch({
      type: OPEN_MODAL,

      // carico utile
      payload: 'my new Modal',
    });
  };

  const closeModal = () => {
    dispatch({
      type: CLOSE_MODAL,
    });
  };

  return (
    <>
      <h2>User Reducer Component</h2>
      <div>
        <h3>Click here to show the Modal</h3>
        <button className="button" onClick={openModal}>
          Show me
        </button>
      </div>
      <Modal
        modalContent={state.modalContent}
        modalState={state.isModalOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default Index;
