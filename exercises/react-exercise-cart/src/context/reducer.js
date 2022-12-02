import {
  DATA_FETCHING_STARTED,
  DATA_FETCHING_SUCCESS,
  DATA_FETCHING_FAILED,
  EMPTY_CART,
  DELETE_ITEM,
  ENCREASE_QTY,
  DECREASE_QTY,
  TOTAL_PRICE,
  COUNTER,
} from './actions';

const reducer = (state, { type, payload }) => {
  // Data Fetching
  if (type === DATA_FETCHING_STARTED) {
    return { ...state, isLoading: true };
  }
  if (type === DATA_FETCHING_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      isError: false,
      products: payload.map((el) => {
        return { ...el, qty: 1 };
      }),
    };
  }
  if (type === DATA_FETCHING_FAILED) {
    return { ...state, isLoading: false, isError: true };
  }

  /**
   * Cart
   */

  //Empty
  if (type === EMPTY_CART) {
    return { ...state, products: [] };
  }

  // Delete item
  if (type === DELETE_ITEM) {
    return {
      ...state,
      products: state.products.filter((el) => el._id !== payload),
    };
  }

  // +
  if (type === ENCREASE_QTY) {
    return {
      ...state,
      products: state.products.map((el) => {
        if (payload === el._id) {
          return {
            ...el,
            qty: el.qty + 1,
          };
        }
        return { ...el };
      }),
    };
  }

  // -
  if (type === DECREASE_QTY) {
    return {
      ...state,
      products: state.products.map((el) => {
        if (payload === el._id) {
          return {
            ...el,
            qty: el.qty - 1,
          };
        }
        return { ...el };
      }),
    };
  }

  // Calc total price in the cart
  if (type === TOTAL_PRICE) {
    return {
      ...state,
      total: state.products.reduce(
        (total /* accumulatore */, item) => {
          return total + item.qty * item.price;
        },
        0
      ),
    };
  }

  // Update number counter in cart
  if (type === COUNTER) {
    return {
      ...state,
      itemCounter: state.products.reduce((total, item) => {
        return total + item.qty;
      }, 0),
    };
  }

  return state;
};

export default reducer;
