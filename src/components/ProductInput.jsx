import React, { useState } from 'react';
import styles from '../styles/ProductInput.module.css';
import { useCart } from '../context/CartContext';

const ProductInput = () => {
  const { dispatch } = useCart();
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
      dispatch({
        type: 'ADD_ITEM',
        payload: { id: Date.now(), name, quantity: Number(quantity) }
      });
      setName('');
      setQuantity(1);
    }
  };

  return (
    <form className={styles.productForm} onSubmit={handleAddProduct}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        min="1"
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductInput;