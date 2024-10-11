import React from 'react';
import styled from 'styled-components';

import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import ProductInput from './components/ProductInput';

const AppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const App = () => {
  return (
    <CartProvider>
      <AppContainer>
        <h1>Shopping Cart</h1>
        <ProductInput />
        <Cart />
      </AppContainer>
    </CartProvider>
  );
};

export default App;