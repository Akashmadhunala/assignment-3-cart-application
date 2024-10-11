import React from 'react';
import styles from '../styles/Cart.module.css';
import CartItem from './CartItem';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { state } = useCart();

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartTitle}>Shopping Cart</h2>
      {state.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        state.items.map(item => <CartItem key={item.id} item={item} />)
      )}
    </div>
  );
};

export default Cart;