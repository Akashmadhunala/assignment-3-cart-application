import React, { useState } from 'react';
import styles from '../styles/CartItem.module.css';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { dispatch } = useCart();
  const [quantity, setQuantity] = useState(item.quantity);

  const updateQuantity = () => {
    if (quantity > 0) {
      dispatch({ type: 'UPDATE_ITEM', payload: { id: item.id, quantity: Number(quantity) } });
    }
  };

  const removeItem = () => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } });
  };

  return (
    <div className={styles.itemContainer}>
      <div>
        {item.name} - Qty:
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
        />
        <button onClick={updateQuantity}>Update</button>
      </div>
      <div>
        <button className={styles.button} onClick={removeItem}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;