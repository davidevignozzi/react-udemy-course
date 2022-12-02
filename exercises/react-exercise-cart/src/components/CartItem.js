import React from 'react';
import { MdDelete } from 'react-icons/md';
import { BiPlus, BiMinus } from 'react-icons/bi';
import { useGlobalContext } from '../context/context';
import formatNumber from '../utils/formatNumber';

const CartItem = ({ _id, name, image, price, qty, countInStock }) => {
  const { deleteItem, encreaseQty, decreaseQty } = useGlobalContext();

  // Check for quantity in stock
  const addQty = (_id) => {
    if (qty + 1 > countInStock) {
      return;
    }

    return encreaseQty(_id);
  };

  // Delete Item if arrive to 0
  const reduceQty = (_id) => {
    if (qty - 1 <= 0) {
      return deleteItem(_id);
    }

    return decreaseQty(_id);
  };

  return (
    <article className="cart-item">
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <p className="prd-name"> {name}</p>
      <div className="qty-selector">
        <button className="btn icon-btn" onClick={() => addQty(_id)}>
          <BiPlus className="icon" />
        </button>
        <p>{qty}</p>
        <button
          className="btn icon-btn"
          onClick={() => reduceQty(_id)}
        >
          <BiMinus className="icon" />
        </button>
      </div>
      <p>{formatNumber(price)} €</p>
      <button
        className="btn icon-btn"
        onClick={() => deleteItem(_id)}
      >
        <MdDelete className="icon minus-icon" />
      </button>
    </article>
  );
};

export default CartItem;
