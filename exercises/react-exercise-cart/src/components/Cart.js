import React from 'react';
import CartItem from './CartItem';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { useGlobalContext } from '../context/context';

const Cart = () => {
  const { products, emptyCart } = useGlobalContext();
  return (
    <section className="section-center" style={{ margin: '2rem' }}>
      <div className="cart-info">
        <h6>Item</h6>
        <h6>Name</h6>
        <h6>Qty</h6>
        <h6>Price</h6>
        <button className="btn icon-btn" onClick={emptyCart}>
          <MdRemoveShoppingCart className="icon minus-icon" />
        </button>
      </div>
      <hr />
      <section className="cart-section">
        {products.map((el) => {
          return <CartItem key={el._id} {...el} />;
        })}
      </section>
    </section>
  );
};

export default Cart;
