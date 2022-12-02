import { OPEN_MODAL, CLOSE_MODAL } from './actions';

const reducer = (state, action) => {
  // prende in carico tutte le azioni che necessitano di
  // essere svolte per mutare il nostro state

  // switchCase

  if (action.type === OPEN_MODAL) {
    return {
      ...state,
      isModalOpen: true,
      modalContent: action.payload,
    };
  }
  if (action.type === CLOSE_MODAL) {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  throw new Error(`No function ${action.type}`);
};

export default reducer;
