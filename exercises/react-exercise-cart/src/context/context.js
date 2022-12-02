import React, { useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
import {
  DATA_FETCHING_FAILED,
  DATA_FETCHING_STARTED,
  DATA_FETCHING_SUCCESS,
  DECREASE_QTY,
  DELETE_ITEM,
  EMPTY_CART,
  ENCREASE_QTY,
  TOTAL_PRICE,
  COUNTER,
} from './actions';
import axios from 'axios';
const url =
  'https://react--course-api.herokuapp.com/api/v1/data/cart';

const initialState = {
  products: [],
  isLoading: true,
  isError: false,
  total: 0,
  itemCounter: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // useReducer with inital state
  const [state, dispatch] = useReducer(reducer, initialState);

  // delete a single element from cart
  const deleteItem = (_id) => {
    dispatch({ type: DELETE_ITEM, payload: _id });
  };

  // make cart empty
  const emptyCart = () => {
    dispatch({ type: EMPTY_CART });
  };

  // +
  const encreaseQty = (_id) => {
    dispatch({ type: ENCREASE_QTY, payload: _id });
  };

  // -
  const decreaseQty = (_id) => {
    dispatch({ type: DECREASE_QTY, payload: _id });
  };

  // Data Fetching
  useEffect(() => {
    // IIFE => is a JavaScript function that runs as soon as it is defined.
    (async () => {
      dispatch({ type: DATA_FETCHING_STARTED });
      try {
        const res = await axios.get(url);
        dispatch({
          type: DATA_FETCHING_SUCCESS,
          payload: res.data.data,
        });
      } catch (err) {
        dispatch({
          type: DATA_FETCHING_FAILED,
        });
      }
    })();
  }, []);

  // TOTAL in CART
  // &
  // Update number counter in cart
  useEffect(() => {
    dispatch({ type: TOTAL_PRICE });
    dispatch({ type: COUNTER });
  }, [state.products]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        deleteItem,
        emptyCart,
        encreaseQty,
        decreaseQty,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
